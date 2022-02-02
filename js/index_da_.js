var dateP = document.getElementById('date');

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

dateP.innerHTML = "Current date is " + date + " & Time = " + time;



function initMap(lat = 38.51212, lng = 27.02645, text = "Please welcome to IKCU. <a href='https://www.ikcu.edu.tr/'> stop by web site </a>") {

    const coordinate = { lat: lat, lng: lng };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: coordinate,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            mapTypeIds: ["roadmap", "terrain", "satellite"],
        },
    });
    const contentString = text;

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    const marker = new google.maps.Marker({
        position: coordinate,
        map,
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });

}

function resetMap() {
    initMap();
    document.getElementById('radio').checked = false
}

function findLocation(parameter) {
    if (parameter == 1) {
        initMap();

    } else if (parameter == 2) {
        initMap(38.61721, 27.43164, "That's where I was born. :) <a href='https://tr.wikipedia.org/wiki/%C5%9Eehzadeler'> stop by web site </a>");

    } else if (parameter == 3) {
        initMap(38.62070, 27.41231, "This is my father's hometown and where I'm staying. <a href='https://tr.wikipedia.org/wiki/Yunusemre'>  stop by web site </a>");

    }
}