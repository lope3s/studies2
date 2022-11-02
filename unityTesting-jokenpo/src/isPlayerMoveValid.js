function isPlayerMoveValid(playerChoice, validOptions) {
    if (!playerChoice) return false

    if (!validOptions.includes(playerChoice)) return false

    return  true
}

module.exports = isPlayerMoveValid;