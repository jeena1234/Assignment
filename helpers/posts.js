
var config = require('../config/config.js')
var supertest = require("supertest");
var request = supertest(config.baseUrl);


exports.getPosts = function() {
    return request
        .get('/posts')
};

exports.getPost = function(post_id){
    return request
        .get('/posts/'+post_id)

};

exports.postPost = function(data){
    return request
    .post('/posts')
    .send(data);
};

exports.putPost = function(post_id,data){
    return request
    .put('/posts/'+post_id)
    .send(data);
};

exports.deletePost = function(post_id){
    return request
    .delete('/posts/'+post_id)
};