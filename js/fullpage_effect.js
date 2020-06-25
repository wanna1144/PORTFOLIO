$(document).ready(function(){

// var url=location.href;
// alert(url);
  //https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean
  $("#fullpage").fullpage({
    verticalCentered:false,
    navigation:false,
    responsiveWidth: 961,
    navigationPositon:'right',
    fixedElements:'#header',
    anchors:['1st', '2st', '3st', '4st'],
    afterLoad:function(anchorLink, index){
      if(anchorLink == '1st'){
        setTimeout(function(){
          $(".page_1>.title").trigger('mousedown');
        },800);
      }

      if(anchorLink == '2st'){
        $(".sub_title_3").addClass("text_line");
        $(".chart").easyPieChart({
          barColor: '#8F80BD',
          trackColor: '#DFDFDF',
          scaleColor: '#fff',
          lineCap: 'butt',
          lineWidth: 30,
          size: 200,
          animate: 1000,
          onStart: $.noop,
          onStop: $.noop
        });
      }

      if(anchorLink == '3st'){
        $(".ani1>.pf_text_title>h1").addClass("txt_line");
      }

      if(anchorLink == '4st'){
        $(".sub_title_5").addClass("text_line");
      }
    },

    afterSlideLoad:function(anchorLink, index, slideAnchor, slideIndex){
      if(slideAnchor==1){
        $(".ani2>.pf_text_title>h1").addClass("txt_line");
      }
      if(slideAnchor==2){
        $(".ani3>.pf_text_title>h1").addClass("txt_line");
      }
      if(slideAnchor==3){
        $(".ani4>.pf_text_title>h1").addClass("txt_line");
      }
      if(slideAnchor==4){
        $(".ani5>.pf_text_title>h1").addClass("txt_line");
      }

      var slide_len = $(".slide").length;
      for (var i = 0; i < slide_len; i++) {
        $(".slide_index").text(slideAnchor+1);
        $(".slide_len").text(slide_len);
      }

    }



  });

});
