"use strict";
// places is the initial data model
var places = [
	{
		name: "Austin Pizza Garden",
		address: "6266 Hwy 290 Austin, TX 78735",
		mapSrc: "Austin+Pizza+Garden",
		latitude: 30.235678,
		longitude: -97.85908,
		wikipediaContent: 'wikpediaContent',
		website: 'http://www.austin-pizza-garden.com',
		yelpID: "austin-pizza-garden-austin-2",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: '<a class="twitter-timeline" href="https://twitter.com/ATXPizzaGarden" data-widget-id="610186640003219456">Tweets by @ATXPizzaGarden</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>',
		instagramWidget: 'no Instagram account'
	},
	{
		name: "Reds Indoor Shooting Range",
		address: "6200 Hwy 290 Austin, TX 78735",
		mapSrc: "Red's+Indoor+Range",
		latitude: 30.236278,
		longitude: -97.856536,
		wikipediaContent: 'wikpediaContent',
		website: "http://www.redsguns.com/",
		yelpID: "reds-indoor-range-austin",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: "no Twitter account",
		instagramWidget: 'no Instagram account'
	},
	{
		name: "Freescale Semiconductor",
		address: "6501 W William Cannon Dr Austin, TX 78735",
		mapSrc: "Freescale+Semiconductor+Inc",
		latitude: 30.238327,
		longitude: -97.866148,
		wikipediaContent: 'wikpediaContent',
		website: "http://www.austin-pizza-garden.com",
		yelpID: "freescale-austin-4",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: '<a class="twitter-timeline" href="https://twitter.com/Freescale" data-widget-id="605108887839113216">Tweets by @Freescale</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>',
		instagramWidget: '<iframe src="http://snapwidget.com/sc/?h=ZnJlZXNjYWxlfGlufDE1MHwzfDN8fG5vfDV8ZmFkZUlufG9uU3RhcnR8eWVzfG5v&ve=310515" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; height:150px"></iframe>'
	},
	{
		name: "Verona Italian Restaurant",
		address: "7101 TX-71 Austin, TX 78735",
		mapSrc: "Verona+Ristorante+Italino",
		latitude: 30.235072,
		longitude: -97.878345,
		wikipediaContent: 'wikpediaContent',
		website: "http://www.veronaustin.com/",
		yelpID: "verona-ristorante-italiano-austin-3",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: '<a class="twitter-timeline" href="https://twitter.com/VeronaAustin" data-widget-id="605113439950733312">Tweets by @VeronaAustin</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>',
		instagramWidget: 'no Instagram account'
	},
	{
		name: "Natural Gardener",
		address: "8648 Old Bee Caves Rd Austin, TX 78735",
		mapSrc: "The+Natural+Gardener",
		latitude: 30.2572,
		longitude: -97.89055,
		wikipediaContent: 'wikpediaContent',
		website: "http://www.naturalgardeneraustin.com/",
		yelpID: "the-natural-gardener-austin",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: '<a class="twitter-timeline" href="https://twitter.com/TheNGAustin" data-widget-id="605114162574794753">Tweets by @TheNGAustin</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>',
		instagramWidget: '<!-- SnapWidget --><iframe src="http://snapwidget.com/sc/?u=dGhlbmF0dXJhbGdhcmRlbmVyfGlufDE1MHwzfDF8fHllc3wyfGZhZGVJbnxvblN0YXJ0fG5vfHllcw==&ve=310515" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; height:150px"></iframe>'
	},
	{
		name: "AMD Advanced Micro Devices",
		address: "7171 Southwest Pkwy Austin, TX 78735",
		mapSrc: "AMD",
		latitude: 30.251333,
		longitude: -97.863768,
		wikipediaContent: 'wikpediaContent',
		website: "http://www.amd.com/",
		yelpID: "",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: '<a class="twitter-timeline" href="https://twitter.com/AMD" data-widget-id="605115206897770496">Tweets by @AMD</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>',
		instagramWidget: '<!-- SnapWidget --><iframe src="http://snapwidget.com/sc/?u=YW1kfGlufDE1MHwzfDF8fHllc3wyfGZhZGVJbnxvblN0YXJ0fG5vfHllcw==&ve=310515" title="Instagram Widget" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; height:150px"></iframe>'
	},
	{
		name: "Hecho en Mexico Restaurant",
		address: "6001 W William Cannon Dr # 301 Austin, TX 78749",
		mapSrc: "Hecho+En+Mexico",
		latitude: 30.228475,
		longitude: -97.863356,
		wikipediaContent: 'wikpediaContent',
		website: "http://hechoenmexico-restaurant.com/",
		yelpID: "hecho-en-mexico-austin",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: '<a class="twitter-timeline" href="https://twitter.com/HECHOENMEXIC0" data-widget-id="605115848739549185">Tweets by @HECHOENMEXIC0</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>',
		instagramWidget: 'no Instagram account'
	},
	{
		name: "ACC Pinnacle Campus",
		address: "7748 Hwy 290 Austin, TX 78736",
		mapSrc: "Austin+Community+College:+Pinnacle+Campus",
		latitude: 30.23152,
		longitude: -97.883524,
		wikipediaContent: 'wikpediaContent',
		website: "http://www.austincc.edu/locations/campuses/pinnacle-campus",
		yelpID: "",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: '<a class="twitter-timeline" href="https://twitter.com/accdistrict" data-widget-id="605116740406636544">Tweets by @accdistrict</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>',
		instagramWidget: 'no Instagram account'
	},
	{
		name: "The Donut Hole",
		address: "6863 W Hwy 290 Austin, TX 78735",
		mapSrc: "Austin+Community+College:+Pinnacle+Campus",
		latitude: 30.233436,
		longitude: -97.872213,
		wikipediaContent: 'wikpediaContent',
		website: "http://www.donutholeaustin.com/",
		yelpID: "the-donut-hole-austin-2",
		yelpSnippet: "",
		yelpImageSrc: "",
		yelpLink: "",
		twitterWidget: 'no Twitter account found',
		instagramWidget: 'no Instagram account'
	},
];

///// Knockout Model
var Place = function(data) {
	this.name = ko.observable(data.name);
	this.address = ko.observable(data.address);
	this.mapSrc = ko.observable(data.mapSrc);
	this.latitude = ko.observable(data.latitude);
	this.longitude = ko.observable(data.longitude);
	this.wikipediaContent = ko.observable(data.wikipediaContent);
	this.website = ko.observable(data.website);
	this.yelpID = ko.observable(data.yelpID);
	this.yelpSnippet = ko.observable(data.yelpSnippet);
	this.yelpImageSrc = ko.observable(data.yelpImageSrc);
	this.yelpLink = ko.observable(data.yelpLink);
	this.twitterWidget = ko.observable(data.twitterWidget);
	this.instagramWidget = ko.observable(data.instagramWidget);
};

///// Knockout View Model
var ViewModel = function() {
  var self = this;

  self.placeList = ko.observableArray([]);
  places.forEach(function(placeItem) {
    self.placeList.push( new Place(placeItem) );
  });
  self.currentPlace = ko.observable( this.placeList()[0] );
  self.filter = ko.observable('');

  /**
  	* @desc This function handles the filtering box and filters the list.
  	* credit: http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
  */
	this.filteredItems = ko.computed(function() {
    var filter = self.filter().toLowerCase();
    if (!filter) {
      return this.placeList();
    } else {
      return ko.utils.arrayFilter(self.placeList(), function(item) {
      	return item.name().toLowerCase().indexOf(filter) !== -1;
      });
    }
	}, this);

  // Initilize google map location to my neighborhood
  var myLatlng = new google.maps.LatLng(30.2433481,-97.8703633);
  var mapOptions = {
    zoom: 13,
    center: myLatlng,
    mapTypeControl: false,
  };

  var markers = [];

  // function called when you click on a place in the list
  this.changePlace = function(place, event) {
  	self.currentPlace(place); // set current place to place that was clicked
  	var context = ko.contextFor(event.target);
   	if (self.currentPlace().yelpID() !== "") {
   		self.callYelpAPI();
   	} else {
   		var rating = document.getElementsByClassName('rating');
   		var ratingTab = rating[context.$index()];
   		ratingTab.textContent = "No Yelp Reviews";
   	}
    self.closeDropdown();

		// make all placeList items not bold
		var placeItems = document.getElementsByClassName('placeListItem');
		var l = placeItems.length;
		for (var i = 0; i < l; i++) {
			var placeItem = placeItems[i];
			placeItem.style.fontWeight = "normal";
		}

		/**
			* gets all of the DOM elements with ID "tabsDiv" + it's index in the list
		*/
		var tabs = document.getElementById('tabsDiv' + context.$index());

		// close all open tabDivs
		$(tabs).slideToggle();
		$('.extra').remove();
		event.target.style.display = 'block';
		$(tabs).prev()[0].style.fontWeight = 'bold';

		// insert blank div behind to lower other list items
		$(event.target).next().append('<div class="extra col-md-5 col-sm-12" stye="position: relative;height: 200px;"></div>');

		var nextID = $(event.target).next()[0].id;
		var targetIndex = nextID.substring(nextID.length - 1, nextID.length);
		document.getElementById('tabRadioTwitter' + targetIndex).checked = true; // default tab shown is twitter

		// GOOGLE MAPS STUFF
  	// panTo place
  	var position = new google.maps.LatLng(place.latitude(),place.longitude());
  	window.map.panTo(position);
  	window.map.setZoom(17);

  	/**
  		* @desc animate and show infobox for each marker
  	*/
  	markers.forEach(function(marker) {
  		if (marker.getPosition().lat().toFixed(6) == place.latitude() && marker.getPosition().lng().toFixed(6) == place.longitude()) {
  			self.showInfoBox(window.infobox, place, map, marker);
  			marker.setAnimation(google.maps.Animation.BOUNCE);
  			window.setTimeout(function() {
  				marker.setAnimation(null);
  			}, 3500);
  		}
  	});

  }; // end function changePlace

  /**
  	* @desc this function is called on page load and initializes everything
  */
  this.initializeMap = function() {
  	var searchMarkers = [];
    window.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // initialize infobox
    window.infobox = new InfoBox({
			content: '',
			disableAutoPan: false,
			maxWidth: 150,
			pixelOffset: new google.maps.Size(-140, 0),
			zIndex: null,
			boxStyle: {
			  background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
			  opacity: 0.75,
			  width: '280px'
	    },
	    closeBoxMargin: '12px 4px 2px 2px',
	    closeBoxURL: 'http://www.google.com/intl/en_us/mapfiles/close.gif',
	    infoBoxClearance: new google.maps.Size(1, 1)
    });

    // put markers at location of each place
    places.forEach(function(place) {
    	var myLatlng = new google.maps.LatLng(place.latitude, place.longitude);
    	var marker = new google.maps.Marker({
    	    position: myLatlng,
    	    map: map,
    	    icon: 'customPinSmall.png',
    	    animation: google.maps.Animation.DROP
    	});

    	markers.push(marker);
    	// add on click function for each marker
    	google.maps.event.addListener(marker, 'click', function() {
    		self.currentPlace(place);
    		// close any open tabs
    		self.closeDropdown();
    		// open dropdown
    		self.showDropdown(place);

    	  map.setZoom(15);
    	  map.panTo(marker.getPosition());
    	  marker.setAnimation(google.maps.Animation.BOUNCE);
    	  window.setTimeout(function() {
    	  	marker.setAnimation(null);
    	  }, 3300);

    	  self.showInfoBox(infobox, self.currentPlace(), map, marker);
    	  // self.showInfoBox(infobox, place, map, marker);

    	});// end addListener marker

    }); // end places.forEach

  	var input = (document.getElementById('mySearchBox'));
  	var searchBox = new google.maps.places.SearchBox((input));

	  // Listen for the event fired when the user selects an item from the
	  // search list. Retrieve the matching places for that item.
	  google.maps.event.addListener(searchBox, 'places_changed', function() {
	    var searchPlaces = searchBox.getPlaces();

	    if (searchPlaces.length === 0) {
	      return;
	    }
	    for (var i = 0, searchMarker; searchMarker = searchMarkers[i]; i++) {
	      searchMarker.setMap(null);
	    }

	    // For each place, get the icon, place name, and location.
	    searchMarkers = [];
	    var searchBounds = new google.maps.LatLngBounds();
	    for (var i = 0, place; place = searchPlaces[i]; i++) {
	      var image = {
	        url: place.icon,
	        size: new google.maps.Size(71, 71),
	        origin: new google.maps.Point(0, 0),
	        anchor: new google.maps.Point(17, 34),
	        scaledSize: new google.maps.Size(25, 25)
	      };

	      // Create a marker for each place.
	      var searchMarker = new google.maps.Marker({
	        map: map,
	        icon: image,
	        title: place.name,
	        position: place.geometry.location
	      });

	      searchMarkers.push(searchMarker);

	      searchBounds.extend(place.geometry.location);
	    }
	    map.fitBounds(searchBounds);
	  });

	  google.maps.event.addListener(map, 'bounds_changed', function() {
	    var bounds = map.getBounds();
	    searchBox.setBounds(bounds);
	  });

  }; // END this.initializeMap

  /**
  	* @desc shows the content dropdown of the @param place
  */
  this.showDropdown = function(place) {
  	var tabs = document.getElementById('tabsDiv' + places.indexOf(place));
  	$(tabs).slideToggle();
  	$('.extra').remove();
  	document.getElementById('tabRadioTwitter' + places.indexOf(place)).checked = true;
  	$(tabs).prev()[0].style.fontWeight = 'bold';
  	$(tabs).append('<div class="extra col-md-5 col-sm-12" stye="position: relative;height: 200px;"></div>');
	  var tabs1 = $('.extra').parent().find('.tab-content');
		// loop through and find the one that is visible
		for (var i = 0; i < tabs1.length; i++) {
			var tab = tabs1[i];
			if ($(tab).is(':visible')) {
				$('.extra').height($(tab).height());
			}
		}
  };

  /**
  	* @desc closes open dropdown
  */
  this.closeDropdown = function() {
  	var tabsDivArray = document.getElementsByClassName('tabsDiv');
  	for (var i = 0; i < tabsDivArray.length; i++) {
  		var tabsDiv = tabsDivArray[i];
  		if ($(tabsDiv).is(':visible')) {
  			$(tabsDiv).slideToggle();
  		}
  	}
  	// makes all placeList not bold
  	var placeItems = document.getElementsByClassName('placeListItem');
  	var l = placeItems.length;
  	for (var i = 0; i < l; i++) {
  		var placeItem = placeItems[i];
  		placeItem.style.fontWeight = 'normal';
  	}
  };

  /**
  	* @desc showsn infobox when marker is clicked or when item is clicked in list
  	* @params
  	*		infobox - the infobox that was set before
  	*		place   - the place that was clicked
  	*		map 		- the window.map google map
  	*		marker  - the marker that was clicked
  */
  this.showInfoBox = function(infobox, place, map, marker) {
  	infobox.open(map, marker);
  	infobox.setContent('<div id="infobox">' + '<h2 id="placeName"><a href="' + place.website.toString() + '">' + place.name() + '</a>' + '</h3><h4>' + place.address() + '</h4></div>');
  };

  // YELP RELATED CODE
  this.callYelpAPI = function() {

		// YELP API STUFF
		var YELP_CONSUMER_KEY = 'N3DofJ4mIItoveG38brAHg';
		var YELP_CONSUMER_SECRET = 'tEeEHCEXinsVqj8L0vhJRT3kEBw';
		var YELP_TOKEN = 'tXgSSy2Kh_8J2gqA1dlKxosMs5vUAy_d';
		var YELP_TOKEN_SECRET = 'R1TICiVW89ybGSpEqy10JxiOTQ8';
		var YELP_BASE_URL = 'http://api.yelp.com/v2/';
		var yelp_url = YELP_BASE_URL + 'business/' + self.currentPlace().yelpID();

		// OAUTH related code
		// Generates a random number and returns it as a string for OAuthentication
		function generate_nonce() {
		  return (Math.floor(Math.random() * 1e12).toString());
		}

  	var parameters = {
      oauth_consumer_key: YELP_CONSUMER_KEY,
      oauth_token: YELP_TOKEN,
      oauth_nonce: generate_nonce(),
      oauth_timestamp: Math.floor(Date.now()/1000),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version : '1.0',
      callback: 'cb'  // This is crucial to include for jsonp implementation in
                      // AJAX or else the oauth-signature will be wrong.
  	};

  	// USE BELOW FROM UDACITY FORUM EXAMPLE TO SIGN OAUTH TO USE YELP API
  	var encodedSignature = oauthSignature.generate('GET',yelp_url, parameters, YELP_CONSUMER_SECRET, YELP_TOKEN_SECRET);
  	parameters.oauth_signature = encodedSignature;

  	// ajax variables
  	var settings = {
      url: yelp_url,
      data: parameters,
      cache: true,  // This is crucial to include as well to prevent jQuery from adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature
      dataType: 'jsonp',
      success: function(results) {
     		self.updateYelpContent(results);
      },
      fail: function() {
        console.log('fail');
      }
    };
    $.ajax(settings);
  }; /////// END callYelpAPI function

  // self.callYelpAPI();

  // put Yelp content onto page
  this.updateYelpContent = function(results) {
  	self.currentPlace().yelpImageSrc(results.image_url);
  	self.currentPlace().yelpSnippet(results.snippet_text.toString());
  	self.currentPlace().yelpLink(results.url);

  	var yelpImage = document.getElementsByClassName('yelpImage')[0];
  	if ($('.yelpSnippet').length > 0) {
  		$('.yelpSnippet').remove();
  	}
  	var br = document.createElement('br');
  	var newParagraph = document.createElement('p');
  	var snippet = document.createTextNode(results.snippet_text.toString());
  	newParagraph.appendChild(snippet);
  	$(newParagraph).addClass('yelpSnippet');
  	$(br).insertAfter(yelpImage);
  	$(function() {
  	  $('span.stars').stars(results.rating);
  	});
  }; // end updateYelpContent function
  ////// end yelp stuff

	//For showing the Yelp star rating
	$.fn.stars = function(rating) {
	  return $(this).each(function() {
	    $(this).html($('<span />').width(Math.max(0, (Math.min(5, parseFloat(rating)))) * 16));
	  });
	};

  google.maps.event.addDomListener(window, 'load', this.initializeMap);
}; ////**** END VIEW MODEL

ko.applyBindings(new ViewModel());