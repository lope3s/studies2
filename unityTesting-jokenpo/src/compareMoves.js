function compareMoves (machineMove, playerMove) {
    const odds = {
        '1': '3',
        '2': '1',
        '3': '2'
    }
    const playerWinsAgainst = odds[playerMove]

    if (playerMove === machineMove) return 'DRAW'

    if(playerWinsAgainst === machineMove) return 'PLAYER WINS'

    return "MACHINE WINS"
}

module.exports = compareMoves;