var expect =require("chai").expect;
var album = require('../../helpers/album.js');
var body , respone
var album_id = 2
var user_id = 1
var title = "qui est esse"

describe("Get Albums",function(){
    context("get a particular album", function(){
        before(function(done){ 
            album.getAlbum(album_id).then(function(resp){
                response = resp
                body = resp.body;
                done();
            })        
            
        })
        it("should be successfull", function(done){
            expect(response.statusCode).to.equal(200)
            done();
        })

        it("should return the album with correct id", function(done){
            expect(body.id).to.equal(album_id)
            done();
        })

        it("should return the correct userid for the album", function(done){
            expect(body.userId).to.equal(user_id)
            done();
        })

        it("should return the correct title for the album", function(done){
            expect(body.title).to.equal(title)
            done();
        })

    })


})