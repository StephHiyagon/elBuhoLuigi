setTimeout(function(){
  $('.js-msj').text("¡Amigo!");
},2000);

//scroll
$('.iconos a').on("click", function(e) {
   e.preventDefault();
    console.log("desplaza");
    console.log(e.target);
    // var height= $(".scroll").outerHeight(true);
    // console.log(height);
    var target ='#'+ $(this).attr("role-link");
    console.log(target);

    $('html,body').animate({scrollTop: $(target).offset().top}, 1200);
    return false;
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
