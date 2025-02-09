namespace SignalrMessageSender.Models;

public class OrderTrackingNotification<T>
{
    public string MessageId { get; set; }
    public string CorrelationId { get; set; }
    public TrackingEventType MessageType { get; set; }
    public T Payload { get; set; }
}