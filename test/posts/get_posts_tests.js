var expect =require("chai").expect;
var posts = require('../../helpers/posts.js');
var body , respone
var post_id = 2
var user_id = 1
var title = "qui est"
var no_post_id = 1004;

describe("Get posts", function(){
    context("get all posts", function(){
        it("should get all posts", function(done){
            posts.getPosts().then(function (resp){
                expect(resp.statusCode).to.equal(200)        
            done();
            })
        })
    })
    context("get a particular posts", function(){
        before(function(done){ 
            posts.getPost(post_id).then(function(resp){
                response = resp
                body = resp.body;
                done();
            })        
            
        })
        it("should be successfull", function(done){
            expect(response.statusCode).to.equal(200)
            done();
        })

        it("should return the post with correct id", function(done){
            expect(body.id).to.equal(post_id)
            done();
        })

        it("should return the correct userid for the post", function(done){
            expect(body.userId).to.equal(user_id)
            done();
        })

        it("should return the correct title for the post", function(done){
            expect(body.title).to.include(title)
            done();
        })

    })

    it("should return 404 error if no post exixts",function(done){
        posts.getPost(no_post_id).then(function (resp){
            expect(resp.statusCode).to.equal(404)        
            done();
        })       
    })
    
})
