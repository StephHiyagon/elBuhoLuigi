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
