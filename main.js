// for every multiples of 3 print "Fizz"
// for every multiples of 5 print "Buzz"
// for every 3 and 5 multiples print "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    checkNumber(i)
}

function checkNumber(number) {
    const FIZZ = 3
    const BUZZ = 5
    let message = ""
    
    if (number % FIZZ == 0)
        message += "FIZZ"

    if (number % BUZZ == 0)
        message += "BUZZ"

    if (message == "")
        message += number

    console.error(message)
}