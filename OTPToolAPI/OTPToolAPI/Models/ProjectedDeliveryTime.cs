namespace SignalrMessageSender.Models;
public class ProjectedDeliveryTime
{
    public string Status { get; set; }
    public string OriginalStartTime { get; set; }
    public string OriginalEndTime { get; set; }
    public string StartTime { get; set; }
    public string EndTime { get; set; }
    public string BufferType { get; set; }
}