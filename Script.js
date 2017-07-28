$(document).ready(function(){
    $("#hide").click(function(){
        $("#startpage").fadeOut(1000);
    });
});



var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "dataProvider": {
    "map": "worldLow",
    "areas": [{
      "id": "US",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/USA.html",
      "selectable": true
    }, {
      "id": "FR",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/France.html",
      "selectable": true
    }, {
      "id": "CN",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/China.html",
      "selectable": true
    }, {
      "id": "RU",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Russia.html",
      "selectable": true
    }, {
      "id": "IN",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/India.html",
      "selectable": true
    }, {
      "id": "AU",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Australia.html",
      "selectable": true
    }
    , {
      "id": "BR",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Brazil.html",
      "selectable": true
    }
    , {
      "id": "DE",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Germany.html",
      "selectable": true
    }
    , {
      "id": "SP",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }
    , {
      "id": "ZA",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/SouthAfrica.html",
      "selectable": true
    }, {
      "id": "IT",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Italy.html",
      "selectable": true
    }, {
      "id": "NG",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Nigeria.html",
      "selectable": true
    }, {
      "id": "IE",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Ireland.html",
      "selectable": true
    }, {
      "id": "TR",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Turkey.html",
      "selectable": true
    }, {
      "id": "SA",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/SaudiArabia.html",
      "selectable": true
    }, {
      "id": "IQ",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Iraq.html",
      "selectable": true
    }, {
      "id": "ET",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Ethiopia.html",
      "selectable": true
    }, {
      "id": "CA",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Canada.html",
      "selectable": true
    }, {
      "id": "ES",
      "modalUrl": "/homes/Desktop/GWC-Final-Project/Countries/Spain.html",
      "selectable": true
    }]
  },
  "areasSettings": {
    "autoZoom" : true,
    "color" : "#85DBC4",
    "colorSolid" : "#84ADE9",
    "selectedColor" : "#517A7C",
    "outlineColor" : "#FFF",
    "rollOverColor" : "#517A7C",
    "rollOverOutlineColor" : "#FFF"
  },
  "listeners": [{
    "event": "clickMapObject",
    "method": function(event) {
      $.fancybox({
        "href": event.mapObject.modalUrl,
        "title": event.mapObject.title,
        "type": "iframe"
      });
    }
  }]
});
