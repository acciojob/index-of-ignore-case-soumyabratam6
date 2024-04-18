function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s1lowercase = s1.toLowerCase();
	let s2lowercse = s2.toLowerCase();
	return s1lowercase.indexOf(s2lowercse);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
