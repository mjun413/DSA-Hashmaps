const words = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];

// helper function
function alphabetize(word) {
	if (!word) {
		return;
	}
	word = word.split('');
	word = word.sort();
	word = word.join('');
	return word;
}

// main function
function anagramGrouper(words) {
	const anagrams = {};
	words.forEach(word => {
		const sortedWord = alphabetize(word);
		if (anagrams[sortedWord]) {
			return anagrams[sortedWord].push(word);
		}
		anagrams[sortedWord] = [word];
	});
	return anagrams;
}

// store the result (anagrams object) in a variable called groupedAnagrams
const groupedAnagrams = anagramGrouper(words);

// iterate over groupedAnagrams, printing out each key:value pair on an individual line
for (const sortedWord in groupedAnagrams) {
	console.log(groupedAnagrams[sortedWord].toString());
}
