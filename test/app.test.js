const request = require("supertest");
const app = require("../index");

describe("Test ExpressJS", () => {
    it('response it Hello World', function(done) {
        request(app)
        .get("/")
        .expect("Content-Type", /text/)
        .expect(200, "Hello World", done)
    });
});

