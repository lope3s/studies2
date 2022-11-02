const machineMove = require('../src/machineMove');

describe('Testing machineMove function', () => {
    const options = ['1', '2', '3']
    it('Should return the machine move', () => {
        const machineChoice = machineMove(options)

        expect(options).toContain(machineChoice)
    })
})