var expect =require("chai").expect;
var posts = require('../../helpers/posts.js');
var body , respone;
var post_id = 22;
var userid =1
var title = "this is by post method"
var body = "api call to create post"

describe("Delete posts", function(){
    context("for an existing post user", function(){
        before(function(done){ 
            posts.deletePost(post_id).then(function(resp){
                response = resp
                done();
            })
        })

        it("should be able to delete the post", function(done){
            expect(response.statusCode).to.equal(200)
            done();
        })   
        
    })
})