//var Books = Backbone.Collection.extend({
//  url: '/books'
//});


var Song = Backbone.Model.extend();

var song = new Song();
song.set("title","Blue in Green");
song.set({
  artist: "Miles Davis",
  publishYear: 1959
})

//Alternately (better)
/*
var song = new Song({
  title: "Blue in Green",
  artist: "Miles Davis",
  publisYear: 1959
})
*/