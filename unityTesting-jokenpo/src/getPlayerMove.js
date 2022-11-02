async function getPlayerMove(client, text) {
    const choice = await client.question(text)

    return choice
}

module.exports = getPlayerMove;