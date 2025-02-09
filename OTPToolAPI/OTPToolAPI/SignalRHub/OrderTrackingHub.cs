using System.Collections.Concurrent;
using System.Runtime.InteropServices.ComTypes;
using Microsoft.AspNetCore.SignalR;
using SignalrMessageSender.Models;

namespace OTPToolAPI.SignalRHub;

public class OrderTrackingHub : Hub
{
    public override Task OnConnectedAsync()
    {
        Console.WriteLine($"Client connected: {Context.ConnectionId}");
        return base.OnConnectedAsync();
    }

    // Called when a client disconnects
    public override Task OnDisconnectedAsync(Exception? exception)
    {
        Console.WriteLine($"Client disconnected: {Context.ConnectionId}");
        return base.OnDisconnectedAsync(exception);
    }

    // Method to handle order tracking updates
    public async Task SendOrderTrackingUpdate(OrderTrackingNotification<OrderUpdateEvent> notification)
    {
        await Clients.All.SendAsync("ReceiveOrderTrackingUpdate", notification);
    }
}