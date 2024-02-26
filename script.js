const apiKey = "1ef33ec93806572bfc9341cabf15fb0a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchButton = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            if (response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();
            
                document.querySelector(".place").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                if (data.weather[0].main == "Clouds"){
                    weatherIcon.src = "icons/clouds.png";
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "icons/rain.png";
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "icons/clear.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "icons/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "icons/mist.png";
                }

                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";

            }
            
        }

        searchButton.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        });