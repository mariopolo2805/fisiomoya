$(window).on("load",function(){$(window).scroll(function(){var i=$(this).scrollTop()+$(this).innerHeight();$(".fade").each(function(){$(this).offset().top+$(this).outerHeight()<i+200&&0==$(this).css("opacity")&&($(this).fadeTo(500,1),$(this).hasClass("reverse")?($(this).css("animation","animateleft 0.5s"),$(this).css("-webkit-animation","animateleft 0.5s")):($(this).css("animation","animateright 0.5s"),$(this).css("-webkit-animation","animateright 0.5s")))})}).scroll()});