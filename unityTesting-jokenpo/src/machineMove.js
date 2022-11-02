function machineMove(options) {
    const position = Math.floor(Math.random() * options.length)

    return options[position]
}

module.exports = machineMove;