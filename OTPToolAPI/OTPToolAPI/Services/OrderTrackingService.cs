using System.Text.Json;
using Microsoft.AspNetCore.SignalR;
using OTPToolAPI.SignalRHub;
using SignalrMessageSender.Models;

namespace OTPToolAPI.Services;

public class OrderTrackingService
{
    private readonly IHubContext<OrderTrackingHub> _hubContext;
    private readonly Random _random; // Random instance for generating random locations

    public string FixturesDirectory { get; }

    public OrderTrackingService(IHubContext<OrderTrackingHub> hubContext, IConfiguration configuration)
    {
        _hubContext = hubContext;
        _random = new Random();
        FixturesDirectory = Path.Combine(Directory.GetCurrentDirectory(),
            configuration["OrderTracking:FixturesDirectory"] ?? "Data/Fixtures");
    }

    // Method to send OrderUpdate message based on a fixture file
    public async Task SendPresetOrderUpdateMessage(string fixturePath)
    {
        if (File.Exists(fixturePath))
        {
            var jsonString = await File.ReadAllTextAsync(fixturePath);
            Console.WriteLine($"Raw JSON: {jsonString}");


            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true, // ✅ Allows property names to match case-insensitively
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase, // ✅ Ensures properties match camelCase JSON
                WriteIndented = true // Optional: Improves logging readability
            };


            var orderUpdateEvent = JsonSerializer.Deserialize<OrderUpdateEvent>(jsonString, options);

            if (orderUpdateEvent != null)
            {
                var orderUpdateNotification = new OrderTrackingNotification<OrderUpdateEvent>
                {
                    MessageId = Guid.NewGuid().ToString(),
                    CorrelationId = Guid.NewGuid().ToString(),
                    MessageType = TrackingEventType.OrderUpdated,
                    Payload = orderUpdateEvent // ✅ Now it's an object, not a string
                };

                await _hubContext.Clients.All.SendAsync("OnMessageReceived", orderUpdateNotification);
                Console.WriteLine($"Sent OrderUpdate message from {fixturePath}: {orderUpdateNotification.MessageId}");
            }
        }
        else
        {
            Console.WriteLine($"Fixture file not found: {fixturePath}");
        }
    }

    public async Task SendCustomMessage(string jsonString)
    {
        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true, // ✅ Allows property names to match case-insensitively
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase, // ✅ Ensures properties match camelCase JSON
            WriteIndented = true // Optional: Improves logging readability
        };

        var orderUpdateEvent = JsonSerializer.Deserialize<OrderUpdateEvent>(jsonString, options);

        if (orderUpdateEvent != null)
        {
            var orderUpdateNotification = new OrderTrackingNotification<OrderUpdateEvent>
            {
                MessageId = Guid.NewGuid().ToString(),
                CorrelationId = Guid.NewGuid().ToString(),
                MessageType = TrackingEventType.OrderUpdated,
                Payload = orderUpdateEvent // ✅ Now it's an object, not a string
            };

            await _hubContext.Clients.All.SendAsync("OnMessageReceived", orderUpdateNotification);
            Console.WriteLine($"Sent custom payload: {orderUpdateNotification.MessageId}");
        }
    }

    // Method to send a LocationUpdated message
    public async Task SendLocationUpdatedMessage()
    {
        var locationUpdateNotification = new OrderTrackingNotification<LocationUpdatePayload>
        {
            MessageId = Guid.NewGuid().ToString(),
            CorrelationId = Guid.NewGuid().ToString(),
            MessageType = TrackingEventType.LocationUpdated,
            Payload = new LocationUpdatePayload
            {
                Latitude = -33.8688,
                Longitude = 151.2093
            }
        };

        await _hubContext.Clients.All.SendAsync("OnMessageReceived", locationUpdateNotification);
        Console.WriteLine($"Sent LocationUpdated message: {locationUpdateNotification.MessageId}");
    }

    // Method to send a random LocationUpdated message
    public async Task SendRandomLocationUpdatedMessage()
    {
        var randomLatitude = GetRandomLatitude();
        var randomLongitude = GetRandomLongitude();

        var randomLocationUpdateNotification = new OrderTrackingNotification<LocationUpdatePayload>
        {
            MessageId = Guid.NewGuid().ToString(),
            CorrelationId = Guid.NewGuid().ToString(),
            MessageType = TrackingEventType.LocationUpdated,
            Payload = new LocationUpdatePayload
            {
                Latitude = randomLatitude,
                Longitude = randomLongitude
            }
        };

        await _hubContext.Clients.All.SendAsync("OnMessageReceived", randomLocationUpdateNotification);
        Console.WriteLine(
            $"Sent Random LocationUpdated message: {randomLocationUpdateNotification.MessageId} (Latitude: {randomLatitude}, Longitude: {randomLongitude})");
    }

    // Method to get a random valid latitude (-90 to 90 degrees)
    private double GetRandomLatitude()
    {
        return _random.NextDouble() * 180 - 90; // Generates a random number between -90 and 90
    }

    // Method to get a random valid longitude (-180 to 180 degrees)
    private double GetRandomLongitude()
    {
        return _random.NextDouble() * 360 - 180; // Generates a random number between -180 and 180
    }
}

// Define a payload for the location update message
public class LocationUpdatePayload
{
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}