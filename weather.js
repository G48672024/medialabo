let kisyou = [];
let selectkuni = "";
let n = 0 ,f=0;

// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
console.log(data.timezone)
console.log(data.name)
console.log(data.coord.lon)
console.log(data.coord.lat)
console.log(data.weather)
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

 /* let u = document.createElement('ul');
  let l = document.createElement('li');
	l.textContent=data.cod; 
	let d = document.querySelector('div#result'); 
	d.insertAdjacentElement('beforeend', l)  */

  let a = document.createElement('a');     
  a.setAttribute('div','result');
  let u = document.createElement('ul');
  a.insertAdjacentElement('beforeend', u);

  l = document.createElement('li');      
  l.textContent = data.timezone;                 
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');     
  l.textContent = data.name;                 
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');     
  l.textContent = data.coord.lon;                 
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');     
  l.textContent = data.coord.lat;                 
  u.insertAdjacentElement('beforeend', l);

  l = document.createElement('li');     
  l.textContent = data.weather[0].main;                 
  u.insertAdjacentElement('beforeend', l);

  p = document.querySelector('span#val_weather');     
  p.insertAdjacentElement('afterend', u); 

}

// 6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

const url1 = 'https://www.nishita-lab.org/web-contents/jsons/openweather/';
const url2 = '.json';

function sendRequest() {
  const radios = document.getElementsByName("kuni");
  let selectkuni = "";
  for (const r of radios) {
    if (r.checked) {
      selectkuni = r.value;
      break;
    }
  }

  const url = url1 + selectkuni + url2;
  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  console.log(data); // デバッグ用

  const weathercb = document.getElementsByName("weather");
  let result = '';

  for (const cb of weathercb) {
    if (cb.checked) {
      let key = cb.value;

      let value;
      switch (key) {
        case "weather.description":
          value = data.weather[0].description;
          key = '天気';
          break;
        case "main.temp_max":
          value = data.main.temp_max + " ℃";
          key = '最高気温';
          break;
        case "main.temp_min":
          value = data.main.temp_min + " ℃";
          key = '最低気温';
          break;
        case "main.humidity":
          value = data.main.humidity + " %";
          key = '湿度';
          break;
        case "wind.speed":
          value = data.wind.speed + " m/s";
          key = '風速';
          break;
        case "wind.deg":
          value = data.wind.deg + " °";
          key = '風向';
          break;
        case "name":
          value = data.name;
          key = '都市名';
          break;
      }
    result += `<li class="weather-item"><strong>${key}:</strong> ${value}</li>`;
      }
  }

  document.getElementById("val_weather").innerHTML = `<ul><strong style="font-size: 20px;">${result}</strong></ul>`;
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('通信が完了しました');
}
