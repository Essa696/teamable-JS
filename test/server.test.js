const app = require("./server")
const request = require("supertest")


test("test request for the valid payload" , async function() {


    const testpayload = {

        name : "test name",
        email : "test.email@example.com",
        interests : "testing"

    }

    const response = await request(app)
        .post("/update-profile")
        .send(testpayload)

    console.log(response.body)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("info")
    expect(response.body.info).toBe("User profile data uploaded successfully")
    


})

test("test request for the invalid payload" , async function() {


    const testpayload = {}

    const response = await request(app)
        .post("/update-profile")
        .send(testpayload)

    console.log(response.body)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("invalid payload. Couldn't update user profile data")
    


})