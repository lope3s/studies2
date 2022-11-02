const {createInterface} = require('node:readline/promises');
const {stdin, stdout} = require('node:process');
const getPlayerMove = require('./getPlayerMove');
const isPlayerMoveValid = require('./isPlayerMoveValid');
const machineMove = require('./machineMove');
const compareMoves = require('./compareMoves');
const rematch = require('./rematch');
const gameEnvironment = require('./gameEnvironment');

(async() => {
    const options = [
        '1',
        '2',
        '3'
    ]
    
    const rematchOptions = [
        '0',
        '1'
    ]
    
    const client = createInterface({input: stdin, output: stdout})

    await gameEnvironment(
        rematchOptions, 
        options, 
        client, 
        getPlayerMove, 
        isPlayerMoveValid, 
        machineMove, 
        compareMoves, 
        rematch
    )

    client.close();
})()