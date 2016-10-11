/**
 * Created by asus on 2016/10/5.
 */
window.addEventListener('touchmove',function (e) {
    e.preventDefault();
})
var index=1;
// touch.on(window,'swipe',function (ev) {
//     if(ev.direction=='down'){
//         index=index-1<=1?1:index-1;
//     }else if(ev.direction=='up'){
//         index=index+1>=8?8:index+1;
//     }
//     animate();doClass();
// })

$('.music').click(function () {
    // var audio=document.getElementById('audio-play');
    var audio=$('#audio-play')[0];
    if( audio.paused){
       audio.play();
    }else{
       audio.pause();
    }
    var state=  this.style.animationPlayState;
    if(state=='paused'){
        this.style.animationPlayState='running';
    }else{
        this.style.animationPlayState='paused';
    }
})

$('.page1-1 .img-6').get(0).addEventListener("webkitAnimationEnd",function () {
    index=index+1;
   animate();
})
$('.page2-1 .img-2').click(function () {
  doClass();
})
$('.page2-1 .img-2').get(0).addEventListener("webkitAnimationEnd",function () {
    index=index+1;
    animate();
})
// $('.page6-1 .img-3 .box .car').get(0).addEventListener('webkitAnimationEnd',function () {
//     $('.page6-1 .img_3').animate({'left':'-60%'});
// })
var angle=0;

touch.on('.target','touchstart',function (ev) {
    ev.startRotate();
    ev.preventDefault();
})
touch.on('.target','rotate',function (ev) {
    var totalAngle=angle+ev.rotation;
    if(ev.fingerStatus==='end'){
        console.log(ev.rotation);
        if(ev.direction=='left'){
            index=index-1
        }else if(ev.direction=='right'){
            index=index+1;
        }
    }
    $('.target').css({'transform':'rotate('+totalAngle+'deg)'});
    animate();
    doClass();
    // addTarget();

})

function animate() {
    // $('.pages').css({'-webkit-transform':'translate3d(0,-'+(index-1)/8*100+'%,0)','transform':'translate3d(0,-'+(index-1)/8*100+'%,0)'})
    $('.pages').css({'top':'-'+(index-1)*100+'%'});
}
function doClass() {
    $('.page').removeClass('active');
    $('.page:eq('+(index-1)+')').addClass('active');
}
// function addTarget() {
//     if(index>2){
//         $('.page .img-4').removeClass('target');
//         $('.page:eq('+(index-1)+') .img-4').addClass('target');
//     }
// }