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
    public IActionResult GetConfig([FromQuery] string configName)
    {
        return GetWebConfig(configName);
    }

    private IActionResult GetWebConfig(string configName)
    {
        if (!FileIO.Exists($"WebConfigs/{configName}.json"))
        {
            return BadRequest($"Config {configName} does not exist!");
        }
        
        var json = FileIO.ReadAllText($"WebConfigs/{configName}.json");
        var configs = JsonSerializer.Deserialize<WebConfigsModel>(json);

        return Ok(configs);
    }
}