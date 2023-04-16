//  https://edabit.com/challenge/QkuiL7XApt2RMQqTJ
// The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

// Notes
// The solution is in the Resources tab. -->


const str = "Breakfast at 09:00 in the room 123:456.";
const REGEXP = /[0-9][0-9]:[0-9][0-9]/
// const REGEXP = /\d{2}\:\d{2}/ it can be represented as this as well

const validate = (REGEXP) => {
	// if(!//.test(String(REGEXP))) return () => "invalid"
	return function testReg(str) {
		return str.match(REGEXP)
	}
}

const testExp = validate(REGEXP)

console.log(testExp(str))

// Test.assertSimilar(testExp(str), ["09:00"])










