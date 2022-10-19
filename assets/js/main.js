//Good luck ^-^
var items=document.querySelectorAll('.item');

var imag=document.getElementById('imag');
var slide=document.getElementById('slide');
var close=document.getElementById('close');
var pre=document.getElementById('prev');
var next=document.getElementById('next');
var slideItem=document.getElementById('slide-item');
var len=items.length;
var index=0;
// i بتحتفض باخر قيمة ل  varلو عملت اريه ولما اكبس على ايتم اي بصير مشكلة لانه ال 
for(var i=0;i<len;i++) {
items[i].addEventListener('click',function(e){
    var x=e.target.src;
    slideItem.childNodes[3].setAttribute('src',x);
    slide.classList.add('active');
    slideItem.childNodes[1].innerHTML='1/6';
})
}
console.log(slideItem.childNodes);

close.addEventListener('click',function(){
    slide.classList.remove('active');
})

next.addEventListener('click',function(){
    changeImg(index+1);
})

pre.addEventListener('click',function(){
    changeImg(index-1);
})

function changeImg(i){
    if(i>=len){ //
        index=0;
    }else if(i<0){
        index=len-1;// اخر صورة
    }
else{
        index=i;
}
console.log(i);
// console.log(len);
var img=items[index].childNodes[1].getAttribute('src');
slideItem.childNodes[3].setAttribute('src',img)
}
// console.log(items[0].childNodes);// في المصفوفة رقم 1 img 

document.addEventListener('keydown',function(e){
    if(e.key=='ArrowRight'){
        next.click();
    }else if(e.key=='ArrowLeft'){
        pre.click();
    }else if(e.key=='Escape'){
        close.click();
    }

    console.log(e);

})