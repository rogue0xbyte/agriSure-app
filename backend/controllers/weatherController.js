exports.getWeather = (req, res, next) => {
    const { landId } = req.params;
  
    // Dummy weather data
    const weatherData = {
      location: 'Shadnagar, TS, IN',
      crop: 'Wheat',
      forecast: [
        { date: '2024-07-26', temp: '30°C', condition: 'Sunny' },
        { date: '2024-07-27', temp: '28°C', condition: 'Cloudy' },
        { date: '2024-07-28', temp: '29°C', condition: 'Partly Cloudy' },
      ],
    };
  
    res.json(weatherData);
  };
  