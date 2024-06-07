const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("should return 'Hello World DevOpsoooo!'", async () => {
        const res = await request(app)
            .get("/")
            .expect('Content-Type', /text/)
            .expect(200);
        
        expect(res.text).toBe('Hello World DevOpsoooo!');
    });
});
