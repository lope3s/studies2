async function gameEnvironment (rematchOptions, options, client, getPlayerMove, isPlayerMoveValid, machineMove, compareMoves, rematch) {
    let playerScore = 0
    let machineScore = 0
    let draws = 0
    let round = 0
    let rematchValue = 1

    while (rematchValue) {
        round ++

        console.log(`Round: ${round}`)
        console.log(`Player Score: ${playerScore}`)
        console.log(`Machine Score: ${machineScore}`)
        console.log(`Draws: ${draws}`, '\n')

        let isPlayerChoiceValid = false
        let playerChoice = undefined

        do {
            playerChoice = await getPlayerMove(
                client, 
`Select your next move:
    1 - Rock
    2 - Paper
    3 - Scissors
`
            )

            isPlayerChoiceValid = isPlayerMoveValid(playerChoice, options)
        } while(!isPlayerChoiceValid)
        
        const machineChoice = machineMove(options)

        const result = compareMoves(machineChoice, playerChoice)

        console.log('\n', result, '\n')

        if (result === "PLAYER WINS") playerScore ++
        if (result === "MACHINE WINS") machineScore ++
        if (result === "DRAW") draws ++

        let isPlayerRematchChoiceValid = false
        let playerRematchChoice = undefined

        do {
            playerRematchChoice = await getPlayerMove(
                client, 
`Rematch?
    0 - NO
    1 - YES
`
            )

            isPlayerRematchChoiceValid = isPlayerMoveValid(playerRematchChoice, rematchOptions)
        } while(!isPlayerRematchChoiceValid)

        rematchValue = rematch(playerRematchChoice)
    }
}

module.exports = gameEnvironment