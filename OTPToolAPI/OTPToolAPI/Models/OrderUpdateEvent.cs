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
        public CoreStatus CoreStatus { get; set; } 
        public List<CoreStatus> CoreStatuses { get; set; }
        public bool IsThirdPartyDelivery { get; set; }
        public bool IsCarrierTypeDecided { get; set; }
    }
}