namespace SignalrMessageSender.Models;

using System.Text.Json.Serialization;

[JsonConverter(typeof(JsonStringEnumConverter))]  // Ensures the enum is serialized as a string
public enum CoreStatusValue
{
    Placement,
    FulfilmentStarted,
    Dispatched,
    DeliveryStarted,
    Completed
}