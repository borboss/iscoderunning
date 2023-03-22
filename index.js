exports.codeRunning = () => {
    console.log('Your code is running!')
}

exports.stopCode = () => {
    console.log('I have stopped your code!')
    process.exit(-1)
}

exports.startCode = () => {
    console.log('Your code has started!')
} 

exports.continueCode = () => {
    console.log('Code continuing!')
} 

exports.pauseCode = () => {
    console.log('I paused your code, auto continuing now...!')
} 

exports.log = (log) => {
    console.log(log)
}
