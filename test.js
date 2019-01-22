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

assertEquals("Fizz", checkNumber(999))
assertEquals("Buzz", checkNumber(500))
assertEquals("FizzBuzz", checkNumber(3000))
assertEquals("7777", checkNumber(7777))