isPalindrome = (word) => {
	const letters = word.split('').filter(l => l.trim());

	if (letters.length <= 1) return true;

	const length = letters.length
	const midpointIndex = Math.ceil(letters.length / 2);
	const tail = letters.slice(midpointIndex);
	const head = letters.slice(0, tail.length)

	const tests = tail.map((letter, index) => {
		const invertedIndex = head.length - index - 1;
		return letter === head[invertedIndex];
	})
	return tests.every((test)=>!!test)
}

const palindromes = [
	'',
	'a',
	'aba',
	'abba',
	'radar',
	'satan natas',
	'sate my metas',
	'satan oscillate my metallic sonatas'
];

const notPalindromes = [
	'ok',
	'ok ok',
	'abra'
]

// run tests
window.onload = () => {

	console.log('__palindromes__');
	palindromes.forEach((p) => {
		const is = isPalindrome(p); 
		console.log(`${is ? 'PASS: ' : 'FAIL: '} "${p}"`)
	})

console.log('  ');
	console.log('__NOT palindromes__');
	notPalindromes.forEach((p) => {
		const is = isPalindrome(p); 
		console.log(`${!is ? 'PASS: ' : 'FAIL: '} "${p}"`)
	})
}