/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
//get data
var mydata="https://github.com/naobann/Yijun-Liu_Midterm/blob/master/map.geojson"
$(document).ready(function() {
  $.ajax(mydata).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: myStyle,
      filter: myFilter
    }).addTo(map);
  });
});
