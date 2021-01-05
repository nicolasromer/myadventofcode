type Bag = string;

const input = (
`shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`
);

const l = (name: string, text: Array<any> | any): void => console.log(name + ': ', text);

/*
 Parse input
 */
const ruleText = input.split('\n').map(t => t.trim());

const bagRegex = new RegExp(/((\w+ \w+)) bags contain/ig);
const ruleRegex = new RegExp(/((\d) (\w+ \w+) bag)/ig);


interface Rules {
	[bag: string]: number;
}

const getRulesObject = (text: string): Rules => {
	const rules: Rules = {};
	let m;
	do {
	    m = ruleRegex.exec(text);

	    if (m && typeof m[3] === 'string' && typeof m[2] === 'string') {
	    	const bagName: string = m[3];
	    	const heldCount: string = m[2];

	        rules[bagName] = parseInt(heldCount, 10);
	    }
	} while (m);

	return rules;
}


/*
 Which bags must be held by this bag?
*/
interface MustHold {
	[bag: string]: Rules;
}

const getMustHold = () => {
	const mustHold: MustHold = {};

	ruleText.forEach(text => {
		const bagResult = text.match(/^(\w+ \w+)/);
		const bag = bagResult[0];
		const rules = getRulesObject(text);
		mustHold[bag] = rules;
	});

	l('mustHold', mustHold);
	return mustHold;
}





/*
Problem 2

 how many total bags does the shiny gold bag hold?
*/

const mustHold = getMustHold();

const countContainedBags = (bag: string): number => {
	let count = 0;
	const mustHoldBags: Rules = mustHold[bag];
	const bags: Array<string> = Object.keys(mustHoldBags);

	if (bags.length === 0) return 0;

	bags.forEach(bag => {
		const bagCount = mustHoldBags[bag];

		count += (countContainedBags(bag) * bagCount) + bagCount;
	});

	return count;
}



console.time('bags2')
console.log('count ', countContainedBags('shiny gold'));
console.timeEnd('bags2')






