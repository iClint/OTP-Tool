using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using FileIO = System.IO.File;

namespace OTPToolAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class WebConfigsController : ControllerBase
{
    [HttpGet(Name = "GetWebConfigs")]
    public IActionResult GetConfig()
    {
        return GetWebConfig();
    }

    private IActionResult GetWebConfig()
    {
        if (!FileIO.Exists($"Data/WebConfigs/web-configs.json"))
        {
            return BadRequest($"Config file does not found!");
        }
        
        var json = FileIO.ReadAllText($"Data/WebConfigs/web-configs.json");
        return Content(json, "application/json");;
    }
}