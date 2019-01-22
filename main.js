// for every multiples of 3 print "Fizz"
// for every multiples of 5 print "Buzz"
// for every 3 and 5 multiples print "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    printMessage(checkNumber(i))
}

function checkNumber(number) {
    const FIZZ = 3
    const BUZZ = 5
    let message = ""
    
    if (number % FIZZ == 0)
        message += "Fizz"

    if (number % BUZZ == 0)
        message += "Buzz"

    if (message == "")
        message += number

    return(message)
}

function printMessage(message) {
    console.error(message)
}