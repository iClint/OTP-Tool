using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using FileIO = System.IO.File;

namespace OTPToolAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class WebConfigsController : ControllerBase
{
    private const string ConfigFilePath = "Data/WebConfigs/web-configs.json";

    [HttpGet(Name = "GetWebConfigs")]
    public IActionResult GetConfig()
    {
        return GetWebConfig();
    }

    private IActionResult GetWebConfig()
    {
        try
        {
            if (!FileIO.Exists(ConfigFilePath))
            {
                return NotFound(new { error = "Config file not found", path = ConfigFilePath });
            }

            var json = FileIO.ReadAllText(ConfigFilePath);
            return Content(json, "application/json");
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "Internal Server Error", details = ex.Message });
        }
    }
}