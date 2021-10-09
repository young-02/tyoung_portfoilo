const API_KEY = '6b20d087a8cf389999ea092c60228072';
const COORDS = 'coords';

function getweather(lat , lng){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
}

function saveCoords (coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSucess(position){
   const latutude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
       latitude : latitude,
       longitude : longitude,
   };
   saveCoords(coordsObj);
   getweather(latutude, longitude)// 위도 경도
}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);//좌표
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
    }
}

function init(){
    loadCoords();
}
init();