// create a function using " function " keyword that takes a string as an argument and return the no. of vowels in the string using arrow function

function countVowels = (str) => {
 let count = 0; // Initialize a counter for vowels
    for (const char of str) {
        console.log(char);
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            // Increment the vowel count
            count++;
        }
    }
    console.log(count); // output the count of vowels
}
