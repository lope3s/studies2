const rematch = require('../src/rematch');

describe("Testing rematch function", () => {
    it("Should convert the string to integer", () => {
        const playerChoice = '0'
        const result = rematch(playerChoice)

        expect(result).toBe(0)
    })
})