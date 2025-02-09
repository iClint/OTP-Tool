using System.Text.Json.Serialization;

namespace SignalrMessageSender.Models;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum TrackingEventType
{
    LocationUpdated,
    OrderArrived,
    TrackingUnavailable,
    OrderUpdated
}