$(document).ready(function(){

  // memu click event
  $(".menu_btn").click(function(){
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(".menu_bar").stop().animate({"left":0}, 400);
      $(".menu_btn").off("mouseenter");
      $(".overlay").fadeTo(300, 0.4);
    }else{
      $(".menu_bar").stop().animate({"left":"-400px"}, 400);
      $(".menu_btn").on("mouseenter", function(){
        $(".burger").addClass("burger_ani");
      });
      $(".overlay").fadeOut();
    }
  });

  $(".m_burger").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(".m_menu_bar").stop().animate({"left":0}, 400);
      $(".overlay").fadeTo(300, 0.4);
    }else{
      $(".m_menu_bar").stop().animate({"left":"-60%"}, 400);
      $(".overlay").fadeOut();
    }
  });

  //menu hover event
  $(".menu_btn").on("mouseenter", function(){
    $(".burger").addClass("burger_ani");
  });

  $(".menu_btn").on("mouseleave", function(){
    $(".burger").removeClass("burger_ani");
  });

  //Navigation click event
  $(".menu_list li").click(function(){
    $(".menu_btn").removeClass("active");
    $(".menu_bar").stop().animate({"left":"-400px"}, 400);
    $(".overlay").fadeOut();
  });

  $(".m_menu_list li").click(function(){
    $(".m_burger").removeClass("on");
    $(".m_menu_bar").stop().animate({"left":"-60%"}, 400);;
    $(".overlay").fadeOut();
  });

  //overlay click event
  $(".overlay").click(function(){
   $(".menu_btn").removeClass("active");
   $(".m_burger").removeClass("on");
   $(".menu_bar").stop().animate({"left":"-400px"}, 400);
   $(".m_menu_bar").stop().animate({"left":"-60%"}, 400);
   $(".menu_btn").on("mouseenter", function(){
     $(".burger").stop().addClass("burger_ani");
   });
    $(".overlay").fadeOut();
  });

  //resize event
  $(window).resize(function(){
    var winWidth = $(window).width();
    if(winWidth <= 961){
      $(".overlay").css({"display":"none"});
    }else{
      $(".m_burger").removeClass("on");
      $(".m_menu_bar").stop().animate({"left":"-60%"}, 100);
    }
  });

  //태블릿 사이즈 wave event 제거
  if (window.matchMedia("(max-width:960px)").matches) {
    $(".page_1").removeClass("wave");
  } else {
    $('.wave').ripples({
       resolution: 256,
       perturbance: 0.04
    });
  }

  //wave 효과 강조
  $(".page_1>.title").on('mousedown',function(e){
    e.offsetX=900;
    e.offsetY=500;
  });

  setTimeout(function(){
    $(".page_1>.title").fadeIn(500);
    $(".page_1>.title").trigger('mousedown');
  },600);


  //tooltip click event
  $(".tooltip").click(function(){
    $(this).addClass("copy");
    $(".tooltip-content").fadeIn(800).promise().done(function(){
    this.fadeOut(800);
    });
  });

}); // End of jQuery 'ready' method

// Title typing
// https://codepen.io/lscsaqib/pen/xwPwmY
var string = "wanna's portfolio";
var array = string.split("");
var timer;

function frameLooper () {
if (array.length > 0) {
  document.getElementById("text").innerHTML += array.shift();
} else {
  clearTimeout(timer);
    }
loopTimer = setTimeout('frameLooper()',200);

}
frameLooper();

//tooltip click event
// 클립보드로 복사하는 기능을 생성
function copyToClipboard(elementId) {

// 글을 쓸 수 있는 란을 만든다.
var aux = document.createElement("input");

// 지정된 요소의 값을 할당 한다.
aux.setAttribute("value", document.getElementById(elementId).innerHTML);

// bdy에 추가한다.
document.body.appendChild(aux);

// 지정된 내용을 강조한다.
aux.select();

// 텍스트를 카피 하는 변수를 생성
document.execCommand("copy");

// body 로 부터 다시 반환 한다.
document.body.removeChild(aux);
}
