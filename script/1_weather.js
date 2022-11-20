// API KEY
const API_KEY = "4960d8d7f7245128c003a5d8f0423bf7";

// 현재 위치 위도 경도 받아오기.
navigator.geolocation.getCurrentPosition(onGeoLocation, onGeoError);

// position : 위치 정보를 담은 객체
function onGeoLocation(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도

  // API 호출 경로
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // URL 처리
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherIcon = document.querySelector(".weatherIcon"); //웨더 아이콘
      const weather = document.querySelector(".weather .tempt");
      const city = document.querySelector(".weather .city");

      console.log(data.name); // 도시 이름 (영어임)
      console.log(Math.ceil(data.main.temp)); //오늘의 기온
      console.log(data.weather[0].main); //오늘의 날씨
      console.log(data.weather[0].id);
      console.log(data.weather[0].icon);
      /*
      description : "clear sky" -> 상세 날씨
      icon : "01d"  -> 아이콘
      id : 800  -> ??
      main : "Clear"  -> 날씨정보 메인!! 핵심!! 
      */

      // HTML 태그에 데이터 넣기
      weatherIcon.src = `./media/images/icons/${data.weather[0].icon}.png`; // 웨더 아이콘
      weatherIcon.alt = data.weather[0].main; // 웨더 아이콘
      weather.innerHTML = `${Math.ceil(data.main.temp)}ºC`;
      // weather.innerHTML = `${Math.ceil(data.main.temp)}°C`;
      // info.innerHTML = `${data.weather[0].main}`;
      city.innerHTML = data.name;
    });
}

// 에러 있으면 보여주기
function onGeoError(error) {
  console.log(error);
}

// if(data.weather[0].icon)

/*
let Description = [
  "clear sky",
  "few clouds",
  "scattered clouds",
  "broken clouds",
  "shower rain",
  "rain",
  "thunderstorm",
  "snow",
  "mist",
];
*/
