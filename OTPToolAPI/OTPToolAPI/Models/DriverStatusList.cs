using System.Text.Json.Serialization;

namespace SignalrMessageSender.Models;

[JsonConverter(typeof(JsonStringEnumConverter))]
public enum DriverStatusList
{
    Assigned,
    ArrivingForPickup,
    WaitingForHandover,
    ReceivingOrder,
    OnTheirWay,
    DroppingOff
}