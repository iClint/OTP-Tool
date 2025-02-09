namespace SignalrMessageSender.Models;

public class CoreStatus
{
    public string TimeStamp { get; set; }
    public string Value { get; set; }
    public SubStatus SubStatus { get; set; }
    public List<SubStatus> SubStatuses { get; set; }
}