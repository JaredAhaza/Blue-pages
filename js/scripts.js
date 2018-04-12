
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


// Get Current Position
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

// Show error if position doesn't show
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
// Get Current Position

// Google Maps
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(-1.3003866, 36.7844459),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

function open() {
  document.getElementById("mySidebar").style.display = "block";
}

function close() {
  document.getElementById("mySidebar").style.display = "none";

}