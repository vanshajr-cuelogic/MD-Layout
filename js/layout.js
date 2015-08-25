$(document).ready(function() {    
    //for toggleing menu
    toggleFn();
    mobileMenu();
    myhealthDataTextbox();
    accountFormToggle();

    /*Doctor Dashboard*/
    var device_width = $(window).width();

    if(device_width < 767){
      $(".portion").hide();
      $(".acc-setting").click(function(){
        $(".portion").slideToggle();
      })
    }
      

    /*Doctor Dashboard*/

      /*Dashboard*/
        $('.carousel').carousel('pause'); //For Pause the auto scroll of carausel
        $('.carousel .item').each(function(){
          var next = $(this).next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<2;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            
            next.children(':first-child').clone().appendTo($(this));
          }
        });

     $("#myBtn").click(function(){
        $("#myModal").modal();
     });
   
     $("#video-1").click(function(){
        $(".modal-backdrop").show();
        $("#myModal").show();
        $("#modal-video2").hide();
        $("#modal-video1").show();
        $("#video-one").attr('src','http://www.youtube.com/embed/T39hYJAwR40?autoplay=1');
     });

     $("#video-2").click(function(){
         $(".modal-backdrop").show();
        $("#myModal").show();
         $("#modal-video1").hide();
         $("#modal-video2").show();
         $("#video-two").attr('src','http://www.youtube.com/embed/T39hYJAwR40?autoplay=1');
     });

     $("#myModal").click(function(){
        video_stop();
     })
     $("#close-video").click(function(){
        video_stop();        
     });

     /*Global function for hidding/Stop the Video functionality*/
     function video_stop(){
        /*Hide Box*/
         $("#myModal").hide();
         $(".modal-backdrop").hide();
        /*Stop Video*/
        $("#video-two").attr('src','http://www.youtube.com/embed/T39hYJAwR40?autoplay=0');
        $("#video-one").attr('src','http://www.youtube.com/embed/T39hYJAwR40?autoplay=0');
        $("#video-speciality").attr('src','http://www.youtube.com/embed/T39hYJAwR40?autoplay=0');
     }
/*Dashboard End*/


/*Browse Doctor*/

  $(".specialist-video").click(function(){
      $(".modal-backdrop").show();
      $("#myModal").modal();
       $("#myModal").show();
      $("#modal-video-speciality").show();
      $("#video-speciality").attr('src','http://www.youtube.com/embed/T39hYJAwR40?autoplay=1');
     });

});



function toggleFn() {

    $('.toggle-handler').click(function() {
        $('.toggle-wrapper').slideToggle();
    });

     $('.toggle-dropdown').each(function() {
        $(this).find("a").click(function() {
            $('.has-sub').slideUp();
            $(this).removeClass('active');
            if (!$(this).next().is(":visible")) {
                $(this).parent().find('.has-sub').slideDown();
                $(this).addClass('active');

            } else {
                $(this).parent().find('.has-sub').slideUp();
                $(this).removeClass('active');
            }
        });
    });
    mouseUpFn();

    $('.toggle-handler').click(function() {
        $('#time-zone-wrap').slideToggle();
    });

    $(".view-report-panel").click(function(){
        $("#report-panel").slideToggle();
    });
    $("#specialist-block").click(function(){
        $("#specialist").show();  
        $("#comment").hide();
    });
    $("#comment-block").click(function(){
        $("#comment").show();
        $("#specialist").hide();
    });
}

function mouseUpFn() {
    $(document).mouseup(function(e) {
        var toggleDropdown = $('.has-sub');
        if (!toggleDropdown.is(e.target) && toggleDropdown.has(e.target).length === 0) {
            toggleDropdown.slideUp();
            $('.toggle-dropdown a').removeClass('active');
        }
    });
}

   
/*code for myhealth textbox*/  
function myhealthDataTextbox() {  
      
  $(".myhealth-docs li").each(function() {  
        var test = $('.update-img');  
        var test2 = $('.myhealth-docs li label');  
        var test3 = $('.edit-name');  
        $(this).find(test).on('click',function(){  
            $(this).parent().prev().find(test2).toggle();  
            $(this).parent().prev().find(test3).toggle();  
        });  
});  
} 

/*code for toggle navbar*/
function mobileMenu() {
    $(".navbar-toggle").on('click',function(){
        $('.mainmenu').slideToggle();

    });
}
/*end code for toggle navbar*/


/*accoutform toggle*/
function accountFormToggle(){
$('.accountFormToggleBtn').click(function() {
        $('.accountFormToggle').slideToggle();;
    $('.accountFormToggleBtn').slideToggle();;    
    });
}
/*end accountform toggle*/