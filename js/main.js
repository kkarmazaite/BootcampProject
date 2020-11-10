/*-------------------SCROLLING-----------------------------------*/
$("#Pradzia").click(function() {
  $('html, body').animate({
      scrollTop: $(".pradzia").offset().top
  }, 1000);
});
$("#Apie").click(function() {
    $('html, body').animate({
        scrollTop: $(".apie").offset().top
    }, 1000);
});
$("#Tvoros").click(function() {
    $('html, body').animate({
        scrollTop: $(".tvoros").offset().top
    }, 1000);
});
$("#Kontaktai").click(function() {
    $('html, body').animate({
        scrollTop: $(".kontaktai").offset().top
    }, 1000);
});
/*------------------FORM VALIDATION-----------------------------------*/
function FormValidation(){
  $("#name, #email, #message").each(function() {
   if($(this).val() === ""){
    alert("Užpildykite visus laukus!");
    return false;
    }
  });
  return false;
}
/*-------------------GOOGLE MAP-----------------------------------*/
function LoadGmaps() {
    var zemelapis=document.getElementById("zemelapis");
    var myLatlng = new google.maps.LatLng(54.9137154,23.9930141);
    var myOptions = {
      zoom: 16,
      center: myLatlng,
      scrollwheel: false,
      }
    var map = new google.maps.Map(zemelapis, myOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Elektrėnų g. 1"
    });

      google.maps.event.addListener(map, 'click', function(event) {
        if (this.scrollwheel == false) {
          this.setOptions({
            scrollwheel: true
          });
        } else {
          this.setOptions({
            scrollwheel: false
          });
        }
      });
}
