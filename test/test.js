const supertest = require("supertest");
const app = require("../index")


describe("GET /", () => {
    it("should return all products", async () => {
        return request(app)
            .get("/")
            .expect('Content-Type')
            .expect(200)
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });
});