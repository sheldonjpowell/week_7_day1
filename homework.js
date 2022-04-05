console.log('this working?')

//==================Exercise #1 ==========//
/*Write a function that finds the index of the first non-consecutive element in the array. 
For example, if we have an array [1, 2, 3, 5, 6, 7] then this will return 3 since the array
at index 3 is 5 which is not consecutive. If every element in the array is consecutive, return -1
*/

function firstNonConsecutive(num){
    let in_ex = num[0]
        for (let i=1; i < num.length; i++){
            if (num[i] !== in_ex)
                  
                break}
            in_ex += 1
        
    console.log(i)
}


//Call function here with arguments
// firstNonConsecutive([1, 2, 3, 5, 6, 7]) 

// create a array that starts with index 0
// start a for loop for the list of num
// index needs to go up while in loop
// if the list does not equal the index num return number
// var num = [1, 2, 3, 5, 6, 7];




//============Exercise #2 ============//
/*Write an arrow function that when given an array of numbers, returns the sum of all of the positives ones.
Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

// Write arrow function here
let thefunc = (num) => {
    c = 0
    for (let n in num){
        if (n >= 0){
            c += n;
    
    console.log(c)
    }
    }

}

// Call function here with arguments
thefunc([10, 12, -9, 3, -1, 0, 15]) 