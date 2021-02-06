document.getElementById('search_button').addEventListener('click', () => {
    const cityInput = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=+${cityInput}+&appid=3784735220c23c36ea32e11d498e2fb0`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.getElementById('show_city').innerText = data.name;
            document.getElementById('show_temperature').innerText = Math.round(data.main.temp - 273.15);
            document.getElementById('weather_status').innerText = data.weather[0].main;
            document.getElementById('icon').src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
        })
        .catch(error => alert("Please search a valid city!"));
    document.getElementById('city').value = '';
})