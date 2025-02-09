namespace SignalrMessageSender.Models
{
    public class OrderUpdateEvent
    {
        public string CarrierName { get; set; }
        public string DriverName { get; set; }
        public string DriverTrackingUrl { get; set; }
        public string DriverMobileNumber { get; set; }
        public string DriverProofOfDeliveryPhotoUrl { get; set; }
        public string[] DriverStatus { get; set; }
        public ProjectedDeliveryTime ProjectedDeliveryTime { get; set; }
        public List<string> Notifications { get; set; }

        // Add these properties to fix the error
        public CoreStatus CoreStatus { get; set; }  // Single core status object
        public List<CoreStatus> CoreStatuses { get; set; }  // Array of core statuses
    }
}