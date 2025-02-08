using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using OTPToolAPI.Models;
using FileIO = System.IO.File;

namespace OTPToolAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class WebConfigsController : ControllerBase
{
    [HttpGet(Name = "GetWebConfigs")]
    public IActionResult GetConfig()
    {
        
        if (FileIO.Exists("WebConfigs/fleet-buttons.json"))
        {
            Console.WriteLine("File exists");
        }
        
        var json = FileIO.ReadAllText("WebConfigs/fleet-buttons.json");
        var configs = JsonSerializer.Deserialize<WebConfigsModel>(json);

        return Ok(configs);
    }
}