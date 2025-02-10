using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using OTPToolAPI.Services;

namespace OTPToolAPI.Controllers
{
    [ApiController]
    [Route("[controller]/{proposition}")]
    public class FixturesController : ControllerBase
    {
        private const string BasePath = "Data/Fixtures";

        [HttpGet("")]
        public IActionResult GetFixtureList(string proposition)
        {
            var directoryPath = Path.Combine(BasePath, proposition);

            if (!Directory.Exists(directoryPath))
            {
                return NotFound($"No fixtures found for proposition: {proposition}");
            }

            var fixtureFiles = Directory.GetFiles(directoryPath, "*.json")
                .Select(Path.GetFileName)
                .OrderBy(name => name)
                .ToList();

            return Ok(fixtureFiles);
        }

        [HttpGet("{fixtureName}")]
        public IActionResult GetFixture(string proposition, string fixtureName)
        {
            var filePath = Path.Combine(BasePath, proposition, fixtureName);

            if (!System.IO.File.Exists(filePath))
            {
                return NotFound($"Fixture file not found! Proposition: {proposition}, Fixture: {fixtureName}");
            }

            var json = System.IO.File.ReadAllText(filePath);
            return Content(json, "application/json");
        }
    }
}