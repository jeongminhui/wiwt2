// API KEY
const API_KEY = "e7d70c6d42207da2a0609fc2f8fbd32c";

// 현재 위치 위도 경도 받아오기.
navigator.geolocation.getCurrentPosition(onGeoLocation, onGeoError);

function onGeoLocation(position) {
  // position : 위치 정보를 담은 객체
  console.log(position);
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도

  console.log(lat);
  console.log(lon);

  // // API 호출 경로
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // URL 처리
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherIcon = document.querySelector(".weatherIcon"); //웨더 아이콘
      // const weather = document.querySelector("#weather .temp");
      // const info = document.querySelector("#weather .info");
      // const city = document.querySelector("#weather .city");

      console.log(data.name); // 도시 이름 (영어임)
      console.log(Math.ceil(data.main.temp)); //오늘의 기온
      console.log(data.weather[0].main); //오늘의 날씨
      console.log(data.weather[0]);
      /*
      description : "clear sky" -> 상세 날씨
      icon : "01d"  -> 아이콘
      id : 800  -> ??
      main : "Clear"  -> 날씨정보 메인!! 핵심!! 
      */

      console.log("대체 뭐길래");
      console.log(data.weather[0].icon);
      const temp_max = data.main.temp_max; // 최고 기온
      const temp_min = data.main.temp_min; // 최저 기온

      // 일교차 : 최고기온과 최저기온이 10도 이상 차이가 나면 일교차가 크다
      const templatureGap = temp_max - temp_min;
      if (templatureGap >= 10) console.log("가벼운 겉옷을 챙기세요!");

      console.log(data.wind.speed); // 풍속 -> 흩날림 움직임 속도 연결 (두 개로 나눠 앞 뒤로 넣기)

      // HTML 태그에 데이터 넣기
      weatherIcon.src = `./medias/images/icons/${data.weather[0].icon}.png`; // 웨더 아이콘
      // console.log(`./medias/images/icons/${data.weather[0].icon}.png`);
      // weatherImg.src = "scattered_clouds.png";
      // weather.innerHTML = `${Math.ceil(data.main.temp)}°C`;
      // info.innerHTML = `${data.weather[0].main}`;
      // city.innerHTML = data.name;
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
