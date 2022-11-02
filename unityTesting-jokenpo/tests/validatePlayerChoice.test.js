const isPlayerMoveValid = require('../src/isPlayerMoveValid.js');

describe('Testing isPlayerMoveValid function', () => {
    const options = ['1', '2', '3']

    it('Should return false if player move is not valid', () => {
        const invalidPlayerMove = 'a'

        const result = isPlayerMoveValid(invalidPlayerMove, options)

        expect(result).toBe(false)
    })

    it("Should return false if player don't choice a move ", () => {
        const invalidPlayerMove = ''

        const result =  isPlayerMoveValid(invalidPlayerMove, options)

        expect(result).toBe(false)
    })

    it('Should return true if player move is valid', () => {
        const validPlayerMove = '1'

        const result =  isPlayerMoveValid(validPlayerMove, options)

        expect(result).toBe(true)
    })
})