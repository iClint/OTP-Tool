using Microsoft.AspNetCore.Mvc;

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
            try
            {
                var directoryPath = Path.Combine(BasePath, proposition);

                if (!Directory.Exists(directoryPath))
                {
                    return NotFound(new { error = "No fixtures found", proposition });
                }

                var fixtureFiles = Directory.GetFiles(directoryPath, "*.json")
                    .Select(Path.GetFileName)
                    .Where(name => !name.Contains("exclude")) // Exclude files first
                    .OrderBy(name => name) // Then order
                    .ToList();

                return Ok(fixtureFiles);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "Internal Server Error", details = ex.Message });
            }
        }

        [HttpGet("{fixtureName}")]
        public IActionResult GetFixture(string proposition, string fixtureName)
        {
            try
            {
                var filePath = Path.Combine(BasePath, proposition, fixtureName);

                if (!System.IO.File.Exists(filePath))
                {
                    return NotFound(new { error = "Fixture file not found", proposition, fixtureName });
                }

                var json = System.IO.File.ReadAllText(filePath);
                return Content(json, "application/json");
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = "Internal Server Error", details = ex.Message });
            }
        }
    }
}