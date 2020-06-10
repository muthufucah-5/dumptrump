

 $(document).ready(function() {
 		$('#rumble-credit').hide(0).fadeIn(500);
 		$('.borboletas').hide(0).fadeIn(500);

 		setTimeout(function(){
 			$('#rumble-credit').fadeOut(1500);
 			$('.borboletas').fadeOut(1500);
 		}, 1500);

 		setTimeout(function(){
 			$('#project-title').show();
 			$('#artist-name').show();
 			$('#bars').show();
 		}, 3500);


 	  setTimeout(function(){
 			$('#project-title').hide();
 			$('#bars').hide();
 			$('#artist-name').hide();
 	  }, 10000);


   setTimeout(function(){
 			$('body').removeClass("noscroll");
 		  $('body').addClass('loaded');
 		}, 10400);
  });







 $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function(){
    $("#push").click(function(){
        $('html, body').animate({ scrollTop: 0 }, 0);
        $('#bgvid').show();
        $('.navbar-custom').css('background-color','black');
        $('header').css('background','black');
        $('#bgvid')[0].play();

        setTimeout(function(){
      		$('#bgvid').fadeOut(500);
          $('header').css('background','');
          $('.navbar-custom').css('background-color', '');
      		// $('#ninety-six').fadeOut(1000);
      	}, 55000);
    });
});

var r = new XMLHttpRequest();
r.onload = function() {
    myVid.src = URL.createObjectURL(r.response);
    myVid.play();
};
if (myVid.canPlayType('video/mp4;codecs="avc1.42E01E, mp4a.40.2"')) {
    r.open("GET", "Beast8.mp4");
}
else {
    r.open("GET", "Beast8.webm");
}

r.responseType = "blob";
r.send();
