var expect =require("chai").expect;
var posts = require('../../helpers/posts.js');
var body , respone;
var post_id = 2;
var userid =1
var title = "this is by post method"
var body = "api call to create post"

describe("Post posts", function(){
    context("user posts a new post", function(){
        before(function(done){ 
            var data ={"userId": userid, "title": title, "body": body}
            posts.postPost(data).then(function (resp){
                response = resp
                body = resp.body;
                done();
            })         
        })

        it("should be able to post a new post", function(done){
                expect(response.statusCode).to.equal(201)    
                done();
        })

        it("should have the correct userid", function(done){
            expect(body.userId).to.equal(userid)    
            done();
        })

        it("should have the correct title", function(done){
            expect(body.title).to.equal(title)    
            done();
        }); 
        
        after(function(done){
            posts.deletePost(userid)
            done();
        })
    });
   
});