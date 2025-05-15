function greeting(){
let l = document.querySelector('input[name="left"]');
let r = document.querySelector('input[name="right"]');
hi = parseInt(l.value);
mi = parseInt(r.value);
wa = hi+mi; 
let p = document.querySelector('span#answer');
p.textContent = wa; 
} 
let b = document.querySelector('button#calc'); 
b.addEventListener('click',greeting); 