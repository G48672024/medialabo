
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yo = document.querySelector('input[name="kazu"]');
  yoso = parseInt(yo.value);
  let p = document.querySelector('span#answer');
  p.textContent = yoso; 

  kaisu++;
  let k = document.querySelector('span#kaisu');
  k.textContent = kaisu; 

  let m = 0;
  // 課題3-1: 正解判定する
console.log(kaisu+'回目の予想：'+yoso)
  // kotae と yoso が一致するかどうか調べて結果を出力

if(yoso === kotae &&  kaisu<=3){
    if(m === 0 ){
    komento ='正解です．おめでとう!';
    kaisu = 10;
    }
}else if(yoso <= kotae && kaisu <= 2){
    komento ='まちがい．答えはもっと大きいですよ';
}else if(yoso >= kotae && kaisu <= 2){
    komento ='まちがい．答えはもっと小さいですよ';
}else if(yoso !== kotae && kaisu === 3){
    komento ='まちがい．残念でした答えは '+kotae+' です';
}
if(kaisu >= 4 && kaisu !== 10){
  
    komento ='答えは '+kotae+' でした．すでにゲームは終わっています';
}
let kome = document.querySelector('p#result');
kome.textContent = komento;

}
let b = document.querySelector('button#calc');
b.addEventListener('click',hantei); 