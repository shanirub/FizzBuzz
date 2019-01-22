// assertEquals copied from To-Roman-Numerals

function assertEquals(expected, actual, message) {
    if (expected != actual) {
        msg = "expected: " + expected + ", actual: " + actual
        if (message != null) {
            msg = "ERROR: " + message + ": " + msg
        }
        console.error(msg)
    }
    else console.error(" Hurra! exp = actual! " + "expected: " + expected + ", actual: " + actual)
}

assertEquals("Fizz", printMessage(checkNumber(999)))
assertEquals("Buzz", printMessage(checkNumber(500)))
assertEquals("FizzBuzz", printMessage(checkNumber(3000)))
assertEquals("7777", printMessage(checkNumber(7777)))