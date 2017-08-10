$('.animBtn2').hide();

//setTimeout(function(){
  //$('.js-msj').text("Cooool!");
//},2000);

//scroll
$('.iconos a').on("click", function(e) {
   e.preventDefault();
    console.log("desplaza");
    console.log(e.target);
    var target ='#'+ $(this).attr("role-link");
    console.log(target);
    $('html,body').animate({scrollTop: $(target).offset().top},1200);
    // setTimeout(function(){
    //   $(target).addClass('loaded');
    //   console.log('agregar clase');
    // },2000);

    return false;
   });

//acordeon

$(function(){
  $(".accordion-titulo").click(function(e){

        e.preventDefault();

        var contenido=$(this).next(".accordion-content");

        if(contenido.css("display")=="none"){ //open
          contenido.slideDown(250);
          $(this).addClass("open");
        }
        else{ //close
          contenido.slideUp(250);
          $(this).removeClass("open");
        }

      });
});

//mapa
var map;
function initMap() {
        // Styles a map in night mode.
        var ubicacion = {lat: ﻿-12.077222222222, lng: -77.092777777778}
        map = new google.maps.Map(document.getElementById('map'), {
          center: ubicacion,
          zoom: 10,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });

        var marcador= new google.maps.Marker({
          position: ubicacion,
          map: map
        });
        buscame();
      }

  const state = {
    lat:null,
    log:null
  }

  function buscame() {

  function success(pos) {
    var crd = pos.coords;
    state.lat = crd.latitude;
    state.log = crd.longitude;
    console.log(state.log);
    const marker = new google.maps.Marker({
      position: {lat:state.lat, lng:state.log},
      map: map,
    });
    map.setZoom(14);
  }

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };

  navigator.geolocation.getCurrentPosition(success, error);
}

//home

$(window).scroll(function(e) {
    const cursorY = $(window).scrollTop();
    console.log(cursorY);
    if(cursorY>=160){
      $('.animBtn2').show();
    }else{
      $('.animBtn2').hide();
    }
  });

//boton HOME
$('.animBtn2').on('click', function(e){
  e.preventDefault();
  console.log('ir al home');
  // console.log(e.target);
  var target ='#'+ $(this).attr("role-link");
  // console.log(target);

  $('html,body').animate({scrollTop: $(target).offset().top},1200);
  // setTimeout(function(){
  //   $(target).addClass('loaded');
  //   console.log('agregar clase');
  // },2000);

  return false;
})

//boton muestra portada
$('.animBtn').on('click', function(e){
  e.preventDefault();
  console.log('ir a portada Luigi');
  // console.log(e.target);
  if($(this).attr('class')=='animBtn themeA'){
    $(this).addClass('buho');
    $('.luigi').css({
        'z-index' : '1'
    });
    $('.boton').css({
        'z-index' : '3'
    });
    $('.themeA').text('Home');
    $('.video').css({
      'z-index':'3',
      'filter':'initial'
    });
  }else{
    $('.luigi').css({
        'z-index' : '2'
    });
    $('.boton').css({
        'z-index' : '10'
    });
    $('.themeA').text('Video');
    $('.video').css({
      'z-index':'0',
      'filter' :'blur(5px)'
    });
    $(this).removeClass('buho');

  }
  if($(this).attr('class')=='animBtn animBtn2 themeB'){
    $(this).addClass('buho');
    $('.luigi').css({
        'z-index' : '2'
    });
    $('.boton').css({
        'z-index' : '10'
    });
    $('.themeA').text('Video');
    $('.video').css({
      'z-index':'0'
    });
  }
  return false;
})


//parallax
function scrollFooter(scrollY, heightFooter)
{
    // console.log(scrollY);
    // console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'

        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}

$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height' : windowHeight + 'px'
        // 'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });

        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        scrollFooter(scroll, footerHeight);
    }
});

//controles de video

var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {'onReady': onPlayerReady}
  });
}

function onPlayerReady(event) {

  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    if (player.getPlayerState() == 1) {
      playButton.innerHTML = "Play";
      player.pauseVideo();

    } else {
      playButton.innerHTML = "Pause";
      player.playVideo();

    }

  });

  var muteButton = document.getElementById("mute-button");
  muteButton.addEventListener("click", function() {
    if (player.isMuted()) {
      player.unMute();
      muteButton.innerHTML = "Mute";
    } else {
      player.mute();
      muteButton.innerHTML = "Unmute";
    }
  });

  var moreButton = document.getElementById("more");
  moreButton.addEventListener("click", function() {
    console.log("more clicked");
    playButton.innerHTML = "Play";
    player.pauseVideo();
  })
}

// Smooth scroll snippet from: https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
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
});
