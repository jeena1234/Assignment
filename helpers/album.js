var config = require('../config/config.js')
var supertest = require("supertest");
var request = supertest(config.baseUrl);

exports.getAlbum = function(album_id){
    return request
        .get('/posts/'+album_id)

};