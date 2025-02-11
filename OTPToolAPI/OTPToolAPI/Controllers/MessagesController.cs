using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using OTPToolAPI.Services;

namespace OTPToolAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class MessagesController(OrderTrackingService orderTrackingService) : ControllerBase
{
    [HttpGet("{proposition}/{fixtureName}")]
    public async Task<IActionResult> SendPresetMessage(string proposition, string fixtureName)
    {
        try
        {
            var fixturePath = Path.Combine(orderTrackingService.FixturesDirectory, $"{proposition}", $"{fixtureName}.json");

            if (!System.IO.File.Exists(fixturePath))
            {
                return NotFound(new { error = "Fixture not found", proposition, fixtureName });
            }

            await orderTrackingService.SendPresetOrderUpdateMessage(fixturePath);
            return Ok(new { success = true, message = "Preset message sent successfully" });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "Internal Server Error", details = ex.Message });
        }
    }
    
    [HttpPost("")]
    public async Task<IActionResult> SendCustomMessage([FromBody] object? jsonData)
    {
        try
        {
            if (jsonData == null)
            {
                return BadRequest(new { error = "Invalid request", details = "JSON data cannot be null" });
            }

            var jsonString = JsonSerializer.Serialize(jsonData); // Convert object to string

            await orderTrackingService.SendCustomMessage(jsonString);

            return Ok(new { success = true, message = "Custom message sent successfully" });
        }
        catch (JsonException jsonEx)
        {
            return BadRequest(new { error = "Invalid JSON format", details = jsonEx.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "Internal Server Error", details = ex.Message });
        }
    }
}
