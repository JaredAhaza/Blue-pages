// $(document).ready(function () {
//     $("#myCarousel").carousel();


//     $(".item1").click(function () {
//         $("#myCarousel").carousel(0);
//     });
//     $(".item2").click(function () {
//         $("#myCarousel").carousel(1);
//     });
//     $(".item3").click(function () {
//         $("#myCarousel").carousel(2);
//     });
//     $(".item4").click(function () {
//         $("#myCarousel").carousel(3);
//     });

   
//     $(".left").click(function () {
//         $("#myCarousel").carousel("prev");
//     });
//     $(".right").click(function () {
//         $("#myCarousel").carousel("next");
//     });
// });

// $(document).ready(function (event) {
//     alert("alert");
// });

var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
};

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}


// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(51.5, -0.12),
//         zoom: 10,
//         mapTypeId: google.maps.MapTypeId.HYBRID
//     }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }