function greeting(){
let l = document.querySelector('input[name="left"]');
let r = document.querySelector('input[name="right"]');
hi = parseInt(l.value);
mi = parseInt(r.value);
wa = hi+mi; 
} 
let b = document.querySelector('button#print'); 
b.addEventListener('click',greeting); 