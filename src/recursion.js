/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if(n < 0){
		return null;
	}

	if( n == 0){
		return 1;
	}

	if(n === 1){
		return n;
	}else{
		return n * factorial(n-1);
	}
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if(!array.length){
		return 0;
	}else if(array.length === 1){
		return array[0];
	}
	return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	if(!array.length){
		return 0;
	}

	var sum = 0;

	array.forEach(item => {
	    if (Array.isArray(item)) {
	    	sum += arraySum(item);
	    } else {
	    	sum += item;
	    }
	});

	return sum;

};

// 4. Check if a number is even.
var isEven = function(n) {
	if (n === -1 || n === 1) {
    	return false;
  	}
  	else if (n === 0 || n === 2) {
    	return true;
  	}

  	if (n > 2) {
    	return isEven(n - 2);
  	} else {
    	return isEven(n + 2);
  	}
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if(n === 0){
		return n;
	}else{
		if(n > 0){
			n--;
		}else{
			n++;
		}
		return n + sumBelow(n);
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	var result = [];

	if( Math.abs( x  - y ) <= 1  || Math.abs( y  - x ) <= 1 ){

		return result;
	}else{

		if(x < y){
			x++;
		}else{
			x--;
		}

		result = [ ...range(x,y)];
		result.unshift(x);
		return result;
	}
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
	if(exp === 0){
		return 1;
	}else{
		if(exp < 0){
			return Number.parseFloat(Number((1/base) * exponent(base, exp+1)).toPrecision(4));
		}else{
			return base * exponent(base, exp-1);
		}
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if(n < 1){
		return false;
	}

    if(n === 1) {
     return true;
    }

    return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if(!string.length){
		return '';
	}
	return reverse(string.slice(1)) + string[0];
};


// 'trert' ---> true
//1st  palindrome(rer) --> true
//2nd palindrome(e) --> true


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.toLowerCase();
	if(string.length === 1 || string.length === 0){

		return true;
	}else{
		if(palindrome(string.slice(1, string.length-1))){
			return (string[0] === string[string.length-1]);
		}else{
			return false;
		}
	}
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// modulo(-79, 82)  // -79
// modulo(-275, -502) // -275 
// modulo(-275, -274) // -1
// modulo(-4, 2) // 0
var modulo = function(x, y) {
	if(y === 0 ){
		return undefined;
	}
	if( y < 0 && y < x){
		y = -y;
	}

	if(x < y && y > 0 && -x < y){
		return x;
	}else{
		if(x < 0 && y > 0){
			return modulo(x+y, y)
		}else{
			return modulo(x-y, y);
		}
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

	if( x === 0 || y === 0){
		return 0;
	}

	if(y === 1){
		return x;
	}else{
		if((x < 0 && y < 0) || y < 0){
			x = -x;
			y = -y;
		}
		return x + multiply(x,y-1);
	}
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	if( y === 0 ){
		return undefined;
	}

	if( y < 0){
		x = -x;
		y = -y;
	}

	if( y === 1 ){

		return x;
	}

	if( x === 0 || x < y){

		return 0;
	} 

	return 1 + divide(x-y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

// 24, 88
// 24 % 88 ==>  x = 88, y = 24
// 88 % 24 ==> x = 24, y = 16
// 24 % 16 ==> x = 16, y = 8

var gcd = function(x, y) {
	if( x < 0 || y  < 0 ){
		return null;
	}

	if(x === 0 || y === 0){
		return 0;
	}

	if( x === 1 || y === 1){
		return 1;
	}

	if( x % y === 0){
		return y;
	}else{
		return gcd( y , x % y);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if(!str1.length && !str2.length){

		return true;
	}else if( (!str1.length && str2.length) || (str1.length && !str2.length) ){
		return false;
	}else if(str1[0] !== str2[0]){
		return false;
	}

	return compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

// 'tre'

var createArray = function(str) {
	let result = [];

	if(!str.length){
		return result;
	}
	result = [str[0], ...createArray(str.slice(1))];
	return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	var result = [];
	if(!array.length){

		return result;
	}else{

		result = [ ...reverseArr(array.slice(1)), array[0]];
		return result;
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var result = [];
	if(length === 0){
		return result;
	}else{
		result = [value, ...buildList(value, length-1)];
		return result;
	}

};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	var result = [];

	if(n === 1){
		return n.toString();
	}else{
		result = [...fizzBuzz(n-1)];
		var str = '';
		if(n%15 === 0){
			str = 'FizzBuzz';
		}else if(n%3 === 0){
			str = 'Fizz';
		}else if(n%5 === 0){
			str = 'Buzz';
		}else{
			str = n.toString();
		}

		result.push(str);
		return result;
	}
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	if(!array.length){
		return 0;
	}else{
		return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value);
	}
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	let result = [];
	if(!array.length){
		return result;
	}else{
		result = [callback(array[0]), ...rMap(array.slice(1), callback)];
		return result;
	}
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var count = 0;

	for(var k in obj){
		if(k === key ){
			count += 1;
		}

		if(typeof obj[k] === 'object'){
			count += countKeysInObj(obj[k], key);
		}
	};

	return count;

};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;

	for(var k in obj){

		if(typeof obj[k] === 'object'){
			count += countValuesInObj(obj[k], value);
		}

		if(obj[k] === value ){
			count += 1;
		}
	};

	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

// {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e'}
// e -> f

var replaceKeysInObj = function(obj, oldKey, newKey) {
	for(var k in obj){

		if(typeof obj[k] === 'object'){
			obj[k]= replaceKeysInObj(obj[k], oldKey, newKey);
		}

		if(k === oldKey ){
			obj[newKey] = obj[k];
			delete obj[k];
		}
	};

	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	var fib = [0,1];

	if( n <= 0){
		return null;

	}else if(n == 1){

		return fib;
	}else{

		var result = fibonacci(n-1);

		fib = [...result, result[n-1] + result[n-2]];

		return fib;
	}
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if( n < 0 ){

		return null;
	}else if( n == 0 ){

		return 0;
	}else if( n == 1 ){

		return 1;
	}else{
		return nthFibo(n-2) + nthFibo(n-1);
	}
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	var result = [];

	if(!array.length){
		return result;
	}else{
		result = [array[0].toUpperCase(), ...capitalizeWords(array.slice(1))];
		return result;
	}
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	var result = [];

	if(!array.length){
		return result;
	}else{
		var firstLetter = array[0][0].toUpperCase();
		var word = array[0].replace(array[0][0], firstLetter);

		result = [word, ...capitalizeFirst(array.slice(1))];
		return result;
	}
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var total = 0;

	for(var k in obj){

		if(typeof obj[k] === 'object'){
			total += nestedEvenSum(obj[k]);
		}

		if(obj[k] %2 == 0 ){
			total += obj[k];
		}
	};

	return total;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	var arr = [];

	array.forEach((elem)=> {

		if(Array.isArray(elem)){
			arr = [...arr, ...flatten(elem)];
		}else{
			arr.push(elem);
		}
	})

	return arr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	var obj = obj || {};

	if(!str.length){
		return obj;
	}else{
		if(obj[str[0]]){
			obj[str[0]]++;
		}else{
			obj[str[0]] = 1;
		}
		
		return letterTally(str.slice(1), obj);
	}
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

// 1st iteration compress[2,2,3,4,4,5,5,5]
// 2nd iteration compress[2,3,4,4,5,5,5]
// 3rd iteration compress[3,4,4,5,5,5]
// 4th iteration compress[4,4,5,5,5]
// 5th iteration compress[4,5,5,5]
// 6th iteration compress[5,5,5]
// 7th iteration compress[5,5]
// 8th iteration compress[5]
// 9th iteration compress[]

var compress = function(list) {
	var result = [];

	if(!list.length){
		return result;
	}else if(list.length === 1){
		return list;
	}else{
		result = [...compress(list.slice(1))];
		if( list[0] !== result[0]){
			result.unshift(list[0]);
		}
		return result;
	}
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	var result = [];

	if(!array.length){
		return result;
	}else{
		result = [...augmentElements(array.slice(1), aug)];
		array[0].push(aug);
		result.unshift(array[0]);
		return result;
	}

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	
	var result = []; 

	if(!array.length){
		return [];
	}else{
		result = [...minimizeZeroes(array.slice(1))];
		if(array[0] === 0 && result[0] !== 0){
			result.unshift(array[0]);

		}else if(array[0] !== 0){
			result.unshift(array[0]);
		}
		return result;
	}
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	var result = []; 

	if(!array.length){
		return result;
	}else if(array.length == 1){
		return [( array[0] < 0 ? -1 * array[0] : array[0])];
	}else{
		var currArr = alternateSign(array.slice(0, array.length-1));
		var currElem = array[array.length-1];
		if( currArr[currArr.length-1] > 0 &&  currElem > 0){

			currElem *= -1;
		}else if( currArr[currArr.length-1] < 0 && currElem < 0){

			currElem *= -1;
		}

		result = [...currArr, currElem];
		return result;
	}
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var numText = {
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five',
		'6': 'six',
		'7': 'seven',
		'8': 'eight',
		'9': 'nine',
		'0': 'zero'
	};

	var result = '';

	if(!str.length){
		return result;
	}else{
		var currStr = numToText(str.slice(1));
		if(numText[str[0]]){
			result += numText[str[0]];
		}else{
			result += str[0];
		}
		result += currStr;

		return result;
	}
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
	node = node || 'body';

	var count = 0;

	var $body = $(node).children();

	if(!$body.length){
		return count;
	}

	$body.each((ele) => {


		if( $($body[ele]).children() ){
			count += tagCount(tag, $body[ele]);
		}

		if( $($body[ele]).is(tag)){
			count++;
		}
	});

	return count;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

// [1,2,3,4,5,6,7] , 1
// 1st --> midpoint = 3, bs(arr, target, 0, 2) min = 0, max = 2
// 2nd --> midpoint = 1, bs(arr, target, 2, 2) min = 0, max = 0


var binarySearch = function(array, target, min, max) {

	min = (min === undefined) ?  0  : min;
	max = (max === undefined) ? array.length-1 : max;
	
	if(min > max){
		return null;
	}

	var midpoint = min + Math.floor((max-min)/2);
	if(array[midpoint] === target){
		return midpoint;
	}else if(array[midpoint] < target){
		return binarySearch(array, target, midpoint+1, max);
	}else{
		return binarySearch(array, target, min, midpoint-1);
	}
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms

// [34,7,23,32,5,62]
// 1: midpoint = 3    mergeSort([34,7,23])
// 2: midpoint = 1    mergeSort([34])


var mergeSort = function(array) {
	var result = [];

	if(!array.length){
		return result;
	}else if(array.length === 1){
		return array;
	}else{
		var midpoint = Math.floor(array.length/2);
		var leftArr = mergeSort(array.slice(0, midpoint));

		var rightArr = mergeSort(array.slice(midpoint));

		var leftIndex = 0;
		var rightIndex = 0;

		while(leftIndex < leftArr.length && rightIndex < rightArr.length){
			if(leftArr[leftIndex] < rightArr[rightIndex]){
				result.push(leftArr[leftIndex]);
				leftIndex++;
			}else{
				result.push(rightArr[rightIndex]);
				rightIndex++;
			}
		}

		return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
		
	}
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
// {a:1,b:{bb:{bbb:2}},c:3};
var clone = function(input) {

	var collection = (Array.isArray(input)) ? [] : {};

	if(Array.isArray(input) && !input.length){
		return collection;
	}

	if(typeof input === 'object' && Object.keys(input).length === 0){
		return collection;
	}

	if(Array.isArray(input)){

		input.forEach((item) => {
			if(Array.isArray(item)){
				collection.push(clone(item));
			}else{
				collection.push(item);
			}
		});
	}

	if(typeof input === 'object'){
		for(var k in input){
			if(typeof input[k] === 'object'){
				collection[k] = clone(input[k]);
			}else{
				collection[k] = input[k];
			}
		};
	}

	return collection;
};
