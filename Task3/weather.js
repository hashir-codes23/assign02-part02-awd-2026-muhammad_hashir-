function print(message) {
  console.log(message);
  if (typeof document !== "undefined") {
    const output = document.getElementById("output");
    if (output) {
      output.textContent += `${message}\n`;
    }
  }
}

async function getWeather(city) {
  try {
    if (!city) {
      throw new Error("City name is required.");
    }

    const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);

    if (!response.ok) {
      throw new Error("Failed to fetch weather.");
    }

    const data = await response.json();
    const temperature = data.current_condition[0].temp_C;

    print(`${city} Temperature: ${temperature}°C`);
  } catch (error) {
    print(`Unable to fetch weather: ${error.message}`);
  } finally {
    print("Weather check complete.");
  }
}

// Test
getWeather("Dera Ismail Khan");
getWeather("");