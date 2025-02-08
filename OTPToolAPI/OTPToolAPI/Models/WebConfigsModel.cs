using System.Text.Json.Serialization;

namespace OTPToolAPI.Models;

public class WebConfigsModel
{
    public List<MainButtons> Buttons { get; set; } = [];
    public List<Tab> Tabs { get; set; } = [];
}

public class Button
{
    [JsonPropertyOrder(1)] public string Label { get; set; } = string.Empty;
    [JsonPropertyOrder(2)] public string Action { get; set; } = string.Empty;
}

public class MainButtons : Button
{
    [JsonPropertyOrder(3)]

    public bool Submenu { get; set; }
    [JsonPropertyOrder(4)]

    public List<Button> SubmenuButtons { get; set; }
}

public class Tab
{
    public string Label { get; set; }
    public string ConfigName { get; set; }
    public string Icon { get; set; }
}