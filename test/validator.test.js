const { isInvalidEmail, isEmptyPayload } = require("./validator")


test("valid email", function() {

    const testpayload = {

        name : "test name",
        email : "test.email@example.com",
        interests : "testing"

    }

    const result = isInvalidEmail(testpayload)
    expect(result).toBe(false)
    

})



test("invalid email", function() {

    const testpayload = {

        name : "test name",
        email : "test.email",
        interests : "testing"

    }

    const result = isInvalidEmail(testpayload)
    expect(result).toBe(true)
    

})

test("empty payload", function() {

    const testPayload = {}

    const result = isEmptyPayload(testPayload)
    expect(result).toBe(true)


})


test("valid payload", function() {

    const testPayload = {

        name : "test name",
        email : "test.email@example.com",
        interests : "testing"
    }

    const result = isEmptyPayload(testPayload)
    expect(result).toBe(false)


})
