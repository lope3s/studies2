const compareMoves = require('../src/compareMoves');

describe('Testing compareMoves function', () => {
    it('Should return players wins', () => {
        const playerMove = '1'
        const machineMove = '3'

        const result = compareMoves(machineMove, playerMove)

        expect(result).toBe('PLAYER WINS')
    })

    it('Should return machine wins', () => {
        const playerMove = '2'
        const machineMove = '3'

        const result = compareMoves(machineMove, playerMove)

        expect(result).toBe('MACHINE WINS')
    })

    it('Should return draw', () => {
        const playerMove = '3'
        const machineMove = '3'

        const result = compareMoves(machineMove, playerMove)

        expect(result).toBe('DRAW')
    })
})