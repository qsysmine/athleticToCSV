(function() {
  var athleticToJSON = function(r) {
    var i = 0;
    var people = [];
    r.split("	").forEach(function(a,b) {
      if(!people[i]) people[i] = {};
      if(b % 4 === 0 && b != 0) {
        people[i].school = a.split(/[0-9]+/g)[0].split("\n")[0];
        i++;
      }
      if(b % 4 == 1) {
        people[i].grade = parseInt(a);
      }
      if(b % 4 == 2) {
        people[i].name = a;
      }
      if(b % 4 == 3) {
        people[i].time = a.split("\n")[0];
      }
    });
    var places = r.match(/[0-9]+\.	/g)
    places.forEach(function(a,b) {people[b].place = parseInt(a.split(".")[0]);});
    return people;
  };
  window.athleticToJSON = athleticToJSON;
})();
