const request = require("supertest");
const app = require("../src/index");

let server;

beforeAll(() => {
  server = app.listen(3001); // ✅ ใช้พอร์ตชั่วคราวเพื่อไม่ให้ชนกับเซิร์ฟเวอร์หลัก
});

afterAll((done) => {
  server.close(() => done()); // ✅ ปิดเซิร์ฟเวอร์หลังจากเทสต์เสร็จ
});

describe("GET /", () => {
  it("should return Hello, World!", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Hello, World!");
  });
});
