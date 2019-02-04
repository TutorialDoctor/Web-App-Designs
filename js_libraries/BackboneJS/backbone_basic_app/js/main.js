//var Person = function(config) {
//	this.name = config.name;
//	this.age = config.age;
//	this.occupation = config.occupation;
//};
//
//Person.prototype.work = function() {
//	return this.name + ' is working.';
//};

var Song = Backbone.Model.extend();
//var song = new Song();
//song.set("title","Blue in Green");
//song.set({
//  artist: "Miles Davis",
//  publishYear: 1959
//})

var song = new Song({
  title: "Blue in Green",
  artist: "Miles Davis",
  publisYear: 1959
})
