const HashMap = require('./HashMap');

function separateChain(items) {
	const lor = new HashMap();
	lor.MAX_LOAD_RATIO = 0.5;
	lor.SIZE_RATIO = 3;
	for (let i = 0; i < items.length; i++) {
		lor.set(
			Object.keys(items[i]).toString(),
			Object.values(items[i]).toString()
		);
	}
	console.log(lor);
}

const items = [
	{ Hobbit: 'Bilbo' },
	{ Hobbit: 'Frodo' },
	{ Wizard: 'Gandolf' },
	{ Human: 'Aragon' },
	{ Elf: 'Legolas' },
	{ Maiar: 'The Necromancer' },
	{ Maiar: 'Sauron' },
	{ RingBearer: 'Gollum' },
	{ LadyOfLight: 'Galadriel' },
	{ HalfElven: 'Arwen' },
	{ Ent: 'Treebeard' }
];

console.log(separateChain(items));
