
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

  let a = document.createElement('a');        // 新規要素 a を作成
  a.setAttribute('div','result');
  let u = document.createElement('ul');
  a.insertAdjacentElement('beforeend', u);

  l = document.createElement('li');      // 青のli要素を作成して，
  l.textContent = data.timezone;                  // ul要素の中に追加
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

  p = document.querySelector('span#val_weather');     // p#primary 要素の
  p.insertAdjacentElement('afterend', u); 

}

// 課題5-1 のイベントハンドラの定義
function show() {
  
}

// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

