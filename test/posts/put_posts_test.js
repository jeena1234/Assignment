var expect = require("chai").expect;
var posts = require('../../helpers/posts.js');
var respone;
var post_id = 20;
var userid = 10
var title = "this is an upadted title"
var body = "this is an updated body"

describe("Put posts", function(){
    context("for an existing post, user", function(){
        before(function(done){ 
            var data = {"userId": userid, "title": title, "body": body}
            posts.putPost(post_id,data).then(function (resp){
                response = resp
                done();  
            })       
        })

        it("should be able to update the post", function(done){
            expect(response.statusCode).to.equal(200)
            done();
        })   
        
    })
})