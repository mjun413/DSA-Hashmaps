function removeDups(str) {
	var uniqueLetters = [];
	var nonUniqueLetters = [];
	str.split('').filter(function(letter) {
		if (uniqueLetters.indexOf(letter) == -1) {
			uniqueLetters.push(letter);
		} else {
			nonUniqueLetters.push(letter);
		}
	});

	var result = uniqueLetters.filter(function(ltr) {
		if (nonUniqueLetters.indexOf(ltr) == -1) {
			return ltr;
		}
	});

	return result.join('');
}

var myString = 'google';

console.log(removeDups(myString));
