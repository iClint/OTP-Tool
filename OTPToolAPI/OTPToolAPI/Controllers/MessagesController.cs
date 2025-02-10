using Microsoft.AspNetCore.Mvc;
using OTPToolAPI.Services;
using SignalrMessageSender.Models;

namespace OTPToolAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class MessagesController : ControllerBase
{
    private readonly OrderTrackingService _orderTrackingService;

    public MessagesController(OrderTrackingService orderTrackingService)
    {
        _orderTrackingService = orderTrackingService;
    }

    [HttpGet("{proposition}/{fixtureName}")]
    public async Task<IActionResult> SendPresetMessage(string proposition, string fixtureName)
    {
        var fixturePath = Path.Combine(_orderTrackingService.FixturesDirectory, $"{proposition}", $"{fixtureName}.json");

        await _orderTrackingService.SendPresetOrderUpdateMessage(fixturePath);

        return Ok();
    }
}