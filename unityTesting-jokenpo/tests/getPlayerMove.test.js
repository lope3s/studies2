const getPlayerMove = require('../src/getPlayerMove');

describe('Testing getPlayerMove function', () => {
    const client = {
        question: jest.fn(async () => '1'),
        close: jest.fn()
    }

    const text = `
    Select your next move:
        1 - Rock
        2 - Paper
        3 - Scissors

    `

    it('Should make a question to the client', async() => {
        await getPlayerMove(client, text)
        expect(client.question.mock.calls.length).toBe(1)
    })

    it('Should return the player choice correctly', async() => {
        const playerMove = await getPlayerMove(client, text)
        expect(playerMove).toBe('1')
    })
})