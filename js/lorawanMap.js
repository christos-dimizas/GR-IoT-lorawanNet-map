/**
 * Created by christos on 31/5/2016.
 */

function initialize() {
    var myCenter= new google.maps.LatLng(37.93997, 23.72282);
    var mapProp = {
        center:myCenter,
        zoom:13,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("addressGoogleMap"),mapProp);
    var marker=new google.maps.Marker({
        position:myCenter
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
