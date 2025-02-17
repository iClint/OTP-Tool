namespace OTPToolAPI.Models;

public class MapUpdateMessage
{
    public string MessageType { get; set; }
    public Coordinate Coordinate { get; set; }
}

public class Coordinate
{
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}