exports.codeRunning = () => {
    console.log('Your code is running!')
}

exports.stopCode = () => {
    console.log('I have stopped your code!')
    process.exit(-1)
}

exports.startCode = () => {
    console.log('I have allowed your code to continue!')
} 

exports.log = (log) => {
    console.log(log)
}