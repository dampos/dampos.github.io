var map;

    // Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var coffee = [
  ['Birokrat', 41.995154, 21.435238, 1],
  ['Broz', 42.000039, 21.417306, 1],
  ['Belier', 41.998513, 21.417045, 1],
  ['CoffeeFactory', 41.999164, 21.423381,1],
  ['Stobi', 41.995274, 21.434044,1],
  ['TheGalery', 42.003866, 21.414994,1],
];

var restaurant =
[
  ['Vodenica', 41.994891, 21.413492, 1],
  ['Pelister', 41.995343, 21.431544, 1],
  ['Veneto', 42.004399, 21.392328, 1],
  ['Gurmet', 42.001253, 21.420886, 1],
  ['Uranija', 42.006098, 21.421999, 1],
  ['Posta', 42.004834, 21.413948, 1],

];

var hotel =
[
  ['Alexandar Palace', 42.010756, 21.405815,1],
  ['HotelRussia', 41.992868, 21.465447,1],
  ['HotelArka', 42.001670, 21.438769,1],
  ['BushiResort', 42.001700, 21.436238,1],
  ['HolidayInn', 41.994561, 21.436392,1],
];


var landscape =
[
  ['Canyon Matka', 41.950804, 21.298937,1],
  ['Kale', 42.000353, 21.433479,1],
  ['VodnoMilleniumCross', 41.965136, 21.394394,1],
  ['MonasteryofStMark', 41.893523, 21.402328,1],
];

var shopping =
[
  ['GTC', 41.994641,21.434718,1],
  ['TCSoravija', 41.993860,21.435533,1],
  ['SkopjeCityMall', 42.004248,21.391763,1],
  ['RamstoreMall', 41.991756,21.427422,1],
  ['Zebra', 41.992645, 21.419904,1],
];

var museum =
[
  ['Arheoloshki', 41.996842, 21.434226, 1],
  ['MakBorba', 41.998060,21.433229,1],
  ['MuzejNaSK', 41.991025,21.429197,1],
  ['Holocaust', 41.998452,21.433501,1],
];

var square =
[
  ['MacedoniaSquare', 41.995920,21.431483, 1],
  ['MotherTeresa', 41.996669,21.435817,1],
  ['Jadran', 41.996452,21.430082,1],
  ['Bazar', 42.001836,21.435915,1],
  ['FilipII', 41.998025,21.434487,1],
];


var hangout =
[
  ['Sektor', 41.995838, 21.424530, 1],
  ['XLClub', 42.007105, 21.421495,1],
  ['Karting', 42.008585, 21.403677,1],
  ['Irish Pub', 41.995062, 21.435664,1],
];

var historical =
[
  ['GateMacedonia', 41.994446, 21.432508,1],
  ['StaraZeleznicka', 41.991395, 21.428804,1],
  ['Skupi', 42.016756, 21.393099,1],
  ['HouseofMotherTeresa', 41.993802, 21.430823,1],
  ['StoneBridge', 41.996837, 21.432858,1],
];


var markers = [];

var icons = [ 
"http://dampos.github.io/skp/images/coffee.png", 
"http://dampos.github.io/skp/images/restaurant.png",
"http://dampos.github.io/skp/images/hotel.png",
"http://dampos.github.io/skp/images/landscape.png",
"http://dampos.github.io/skp/images/shopping.png",
"http://dampos.github.io/skp/images/museum.png",
"http://dampos.github.io/skp/images/square.png",
"http://dampos.github.io/skp/images/hangout.png",
"http://dampos.github.io/skp/images/historic.png",
];

var locations = [ 
  [
  ['Birokrat', 41.995154, 21.435238, 1],
  ['Broz', 42.000039, 21.417306, 1],
  ['Belier', 41.998513, 21.417045, 1],
  ['CoffeeFactory', 41.999164, 21.423381,1],
  ['Stobi', 41.995274, 21.434044,1],
  ['TheGalery', 42.003866, 21.414994,1],
],

[
  ['Vodenica', 41.994891, 21.413492, 2],
  ['Pelister', 41.995343, 21.431544, 2],
  ['Veneto', 42.004399, 21.392328, 2],
  ['Gurmet', 42.001253, 21.420886, 2],
  ['Uranija', 42.006098, 21.421999, 2],
  ['Posta', 42.004834, 21.413948, 2],

],

[
  ['AlexandarPalace', 42.010756, 21.405815,3],
  ['HotelRussia', 41.992868, 21.465447,3],
  ['HotelArka', 42.001670, 21.438769,3],
  ['BushiResort', 42.001700, 21.436238,3],
  ['HolidayInn', 41.994561, 21.436392,3],
],

[
  ['CanyonMatka', 41.950804, 21.298937,4],
  ['Kale', 42.000353, 21.433479,4],
  ['VodnoMilleniumCross', 41.965136, 21.394394,4],
  ['MonasteryofStMark', 41.893523, 21.402328,4],
],

[
  ['GTC', 41.994641,21.434718,5],
  ['TCSoravija', 41.993860,21.435533,5],
  ['SkopjeCityMall', 42.004248,21.391763,5],
  ['RamstoreMall', 41.991756,21.427422,5],
  ['Zebra', 41.992645, 21.419904,5],
],


[
  ['Arheoloshki', 41.996842, 21.434226, 6],
  ['MakBorba', 41.998060,21.433229,6],
  ['MuzejNaSK', 41.991025,21.429197,6],
  ['Holocaust', 41.998452,21.433501,6],
],

[
  ['MacedoniaSquare', 41.995920,21.431483, 7],
  ['MotherTeresa', 41.996669,21.435817,7],
  ['Jadran', 41.996452,21.430082,7],
  ['Bazar', 42.001836,21.435915,7],
  ['FilipII', 41.998025,21.434487,7],
],

[
  ['Sektor', 41.995838, 21.424530, 8],
  ['XLClub', 42.007105, 21.421495,8],
  ['Karting', 42.008585, 21.403677,8],
  ['Irish Pub', 41.995062, 21.435664,8],
],

[
  ['GateMacedonia', 41.994446, 21.432508,9],
  ['StaraZeleznicka', 41.991395, 21.428804,9],
  ['Skupi', 42.016756, 21.393099,9],
  ['HouseofMotherTeresa', 41.993802, 21.430823,9],
  ['StoneBridge', 41.996837, 21.432858,9],
],


 ];


      function initMap() {
        var customMapType = new google.maps.StyledMapType([ { "featureType": "poi", "stylers": [ { "visibility": "off" } ] } ]);
        var customMapTypeId = 'custom_style';

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.9947048, lng: 21.4315207},
          zoom: 15,
          mapTypeControlOptions: {
          
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }

        });

        map.mapTypes.set(customMapTypeId, customMapType);
        map.setMapTypeId(customMapTypeId);

		
        initialize();
		

      }




function initialize()
{

  var contentString = '<iframe src=""></iframe>';
  

  
  for(var i =0; i < locations.length; i++)
  {
    var group = [];

    for(var x = 0; x < locations[i].length; x++)
    {

        var image = {
        url: icons[i],
        size: new google.maps.Size(32, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
        };

        var marker = new google.maps.Marker({
        position: {lat: locations[i][x][1], lng: locations[i][x][2]},
        map: null,
        icon: image,
        title: locations[i][x][0],
      });

      addWindow(marker, '<iframe src="dsc/'+locations[i][x][0]+'.html"></iframe>');

      group.push(marker);
    }

    markers.push(group);
  }
}

function setMarkers(i) {
  for(var x = 0; x < markers[i].length; x++)
  {
    markers[i][x].setMap(map);
  }
}

function addWindow(marker, message)
{

  var infoWindow = new google.maps.InfoWindow({
                content: message
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
}

function removeMarkers(i) {
  for(var x = 0; x < markers[i].length; x++)
  {
    markers[i][x].setMap(null);
  }
}

function update(e)
{
  // 'this' is reference to checkbox clicked on
    var form = this.form;

    if ( this.checked ) {
        setMarkers(this.value);
    } else {
        removeMarkers(this.value);
    }
}