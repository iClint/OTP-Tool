using System.Text.Json.Serialization;

namespace SignalrMessageSender.Models;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum KnownSubStatusValue
{
    Received,
    Picking,
    Staged,
    PreparingHandover,
    HandingOver,
    OnItsWay,
    NextInLine,
    Arriving,
    Delivered,
    Cancelled
}