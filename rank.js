fetch('https://simplescraper.io/api/lK6O8D3j2fIEl30wm0qS?limit=100', {
    headers: {
        'apikey': 'kxAr0VKbEERmdfqmigx2z9h0FRsLc1VK'
    }
}).then(response => response.json())
  .then(data => {
    response.send(data.data[0].Duos)
  });
