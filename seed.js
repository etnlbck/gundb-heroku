var seedData = require('./seedData.json');
var seedDB = function (gun) {
    var places = gun.get('places');
    seedData.map(function (place) {
        places.set(gun.get('places/place/' + place.locationId).put(place));
    });
};

module.exports = seedDB;
