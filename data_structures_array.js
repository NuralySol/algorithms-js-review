//! Data Structures and Algorithms, Advanced Review!
//! Array Data Structure, and the algorithm to find the user. 
const studentsDatabase = [" Nuraly", "Aigerim", "Aidana", "Joomart"];

const findStudent = (allStudents, studentName) => {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(`Found: ${studentName}`);
        }
    }
};

findStudent(studentsDatabase, "Aigerim")

//! (Algorithm) Step by stop solution to a problem. Efficient problem solver. 
const groceries = ["Milk", "Bread", "Flour", "Cheese", "Sugar"]

const searchGroceries = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
            console.log(`Found: ${item}`);
        }
    }
}

searchGroceries("Milk");

//! This algorithm has the Big-O: O(n^2) Quadtratic. 
function findPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`Pairs: ${arr[i]},${arr[j]} `)
        }
    }
}

const numbers = [1, 2, 3, 4, 5]

findPairs(numbers)

//! Class algorithm Custom Array to use the push method to create our custom array
//! Need to define the methods in the class in order to access them or manipulate them

class MyArray {
    //constructor to define and hold the data opjects
    constructor() {
        this.length = 0;
        this.data = {};
    }
    // Methods to access and modify the custom array that is dynamic and mutable. 
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    get(index) {
        return this.data[index];
    }
    pop() {
        const lastItem = this.data[this.length - 1]; // getting the last element from the array
        delete this.data[this.data - 1]; // deleting the last item element in the array
        this.length--;
        return lastItem; // need to return the element in order acces this method. 
    }
    shift() {
        const firstItem = this.data[0] // accessing the first element in the array

        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1] // increament by 1 reindexing the array

        }
        // delete the last element 
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;

    }
    delete(index) {
        const item = this.data[index]
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }


}

const myNewArray = new MyArray()

// .push method to add a new item to the end of the Array
myNewArray.push("apple")
myNewArray.push("Orange")
myNewArray.push("Mango")

// .pop method removes the last element in the array 
myNewArray.pop()

// .get method to get the element in the array by its index
myNewArray.get(0)
myNewArray.get(1)
myNewArray.get(2)

//1st log the original array, 2nd log show the shift method on array, 3rd Show the modifed array (shifted)
console.log(myNewArray)
console.log(myNewArray.shift())
console.log(myNewArray)
console.log(myNewArray.delete(0))
console.log(myNewArray)

//! Reverse Strings 

//1. Convert string to array (split method)
//2: Reverse the array (reverse method)
//3: Convert the array back to string (join method)
// The below code is chaining method on a string with a function reverseString
const reverseString = (str) => str.split('').reverse().join("");

console.log(reverseString("Hello"));
console.log(reverseString("Apple"))
console.log(reverseString("Nuraly"))

//! Palindromes abba = abba (reverse is equal after reversion) Boolean

//1: function palindrome with methods split.reverse.join and with a boolean statement === true
//2: function returns true or false depending on the console.log and compares it to itself after reversion and if true returns true or false (boolean DS)
const palindrome = (str) => str.split('').reverse().join("") === str;

console.log(palindrome("Mark"))
console.log(palindrome("SaS"))
console.log(palindrome("Sas")) // this one is false thus it is fase sensetive to check the strings

//! Integer reversals (i.e. 1234 -> 4321)
// this function uses method chaining to get the reversal of the integers that is passed in the log 

const reverseInt = (number) => {
    const reversed = number.toString().split("").reverse().join("");
    return parseInt(reversed) * Math.sign(number);
};

console.log(reverseInt(123))

//! Sentence Capitalization (i.e. hello world -> Hello World)
const capitalize = (str) => {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
};
console.log(capitalize("hello World"));
console.log(capitalize("Nuraly soltonbekov"))

//* ^ edge case as the function forces to toLowerCase first before running other methods on a string to capitalize the first letter of strings that are being passed on

console.log(capitalize("jordan nash"))

//! Fizz Buzz interview questions, one of the most popular interview questions.
// If the number is divisible by 3 print Fizz, by 5 print Buzz, if divisible by both then print FizzBuzz. Start from 1 to N (numbers) 
// Chaining the if and else if conditions to see if the numbers can be Fizz Buzz
const fizzBuzz = (numbers) => {
    for (let i = 1; i <= numbers; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
    }
};

//* Call the function and get the numbers up to 15 in this argument on which numbers are Fizz, Buzz or FizzBuzz
fizzBuzz(15)

//! MaxProfit to buy the stock algorithm buying low and selling high only once

const MaxProfit = (prices) => {
    let minPrice = prices[0] // Assuming the first day is the cheapest day to buy, NOT THE CASE

    let MaxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        const currentPrice = prices[i];
        //* Update the minimum price if the lower price is found

        minPrice = Math.min(minPrice, currentPrice);

        const potentialProfit = currentPrice - minPrice;

        //* Get the maximum Profit
        MaxProfit = Math.max(MaxProfit, potentialProfit);

    }

    return MaxProfit;

};

const prices = [7, 1, 5, 3, 6, 4]

const profit = MaxProfit(prices)

console.log("Maximum Profit", profit)


//! Array Chunk: Write a function that takes an array and a chunk size as input. The function should return a new array where the original array is split into chunks of the specified size. 

const chunk = (array, size) => {
    // Step 1: Declare an empty array to store the chunks
    const chunked = [];

    // Step 2: Initialize an index variable to track the current position in the array
    let index = 0;

    // Step 3: Loop through the array until the index reaches the end of the array
    while (index < array.length) {

        // Step 4: Extract a slice of the array starting from the current index
        // and including 'size' number of elements
        const chunk = array.slice(index, index + size);

        // Step 5: Log the current chunk (for debugging or demonstration purposes)
        console.log(chunk);

        // Step 6: Push the chunked portion into the 'chunked' array
        chunked.push(chunk);

        //* Step 7: Increment the index by 'size' to move to the next chunk index += size: is the shorthand
        index = index + size;
    }

    // Step 8: Return the final array of chunks
    return chunked;
}

// Test the function by splitting an array into chunks of size 3
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

//! Two Sum Data Structure challenge 
//* This is not the better solution the better solution will be 2nd Code for this challenge. This algoritm is O (n^2) run time which quadratic and is not a "good solution".

function twoSum(nums, target) {
    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // For each number, check the rest of the array
        for (let j = i + 1; j < nums.length; j++){
            // If the current number and the one we are checking add up to the target, return their indexes
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return [];
}

const res = twoSum([2, 7, 11, 15], 9);
console.log(res);

//* Refactor the code for two Sum which is not O(n^2). 
//* The below solution is refactored: O(n). Much more efficient than nested loops. 
function twoSumBetter(nums, target) {
    // Create a hash map to store the difference and its index
    const map = new Map();

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement that would sum to the target
        const complement = target - nums[i];

        // Check if the complement exists in the hash map
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices of complement and current number

        }
        // Otherwise, add the current number and its index to the hash map
        map.set(nums[i], i);
    }

    // If no solution is found, return an empty array
    return [];
}

const betterRes = twoSumBetter([2, 7, 11, 15], 9);
console.log(betterRes); 















