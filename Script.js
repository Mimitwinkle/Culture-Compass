var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "dataProvider": {
    "map": "worldLow",
    "areas": [{
      "id": "US",
      "modalUrl": "/homes/Desktop/Test/Home.html",
      "selectable": true
    }, {
      "id": "FR",
      "modalUrl": "/homes/Desktop/Test/Countries/France.html",
      "selectable": true
    }, {
      "id": "CN",
      "modalUrl": "https://en.wikipedia.org/wiki/China",
      "selectable": true
    }, {
      "id": "RU",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }, {
      "id": "IN",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }, {
      "id": "AU",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }
    , {
      "id": "BR",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }
    , {
      "id": "DE",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }
    , {
      "id": "SP",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }
    , {
      "id": "ZA",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }, {
      "id": "IT",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }, {
      "id": "NG",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }, {
      "id": "IE",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }, {
      "id": "TR",
      "modalUrl": "https://en.wikipedia.org/wiki/France",
      "selectable": true
    }]
  },
  "areasSettings": {
    "autoZoom" : true,
    "color" : "#85DBC4",
    "colorSolid" : "#84ADE9",
    "selectedColor" : "#0B777C",
    "outlineColor" : "#FFF",
    "rollOverColor" : "#0B777C",
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
