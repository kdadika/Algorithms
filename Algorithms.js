/*========================================
                FOR LOOP
========================================*/

function forLoop() {
    for (let i=0; i < 11; i++){
        console.log(i);
    }
  }

  forLoop();

/*========================================
                WHILE LOOP
========================================*/

function whileLoop() {
    let i=0;
    while (i <= 5){
        console.log(i);
        i++;
    }
  }
  whileLoop();

/*========================================
            IF / ELSE STATEMENT
========================================*/

  function ifElse() {
    let number = 10
    if (number < 10) {
        console.log('less than 10')
    } else if (number > 10) {
        console.log('greater than 10')
    }else {
        console.log('the value is 10')
    }
  }
  ifElse();

/*========================================
            FIND THE MEAN
========================================*/

  function mean(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        count += numbers[i];
    }
    return count / numbers.length;
  }

/*========================================
            FIND THE MEDIAN
========================================*/

  function median(numbers) {

    let median = 0
    let numsLen = numbers.length;
    numbers.sort();

    //if length of string is even
    if (numsLen % 2 === 0) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }

    return median;
}

/*========================================
            FIND THE MODE
========================================*/

function mode(numbers) {
    let modes = []
    let count = []
    let i;
    let num;
    let maxIndex = 0;

      for (i = 0; i < numbers.length; i += 1) {
          num = numbers[i];
          count[num] = (count[num] || 0) + 1;
          if (count[num] > maxIndex) {
              maxIndex = count[num];
          }
      }

      for (i in count)
          if (count.hasOwnProperty(i)) {
              if (count[i] === maxIndex) {
                  modes = Number(i)

              }
          }

      return modes;
  }

/*========================================
   FLATTEN AN ARRAY INTO ANOTHER ARRAY
========================================*/

let uglyArray = [[1,2,[3,[4]]],5];

function flatten(items){

const flat = [];

items.forEach(item => {
    if (Array.isArray(item)){
//spread operator (ES6) flattens array into another
    flat.push(...flatten(item));

} else {
    flat.push(item)
    }

});

return flat;

}

flatten(uglyArray);

// [1, 2, 3, 4, 5]

/*========================================
            SUM OF ARRAY
========================================*/

function sum (numbers) {
    let sum = 0;
    for(let i=0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
  }

/*
SUM OF ARRAY WITH .reduce()
*/
function sum (numbers) {
    return numbers.reduce(function(acc, num){
    return acc + num;
    });
  }

/*========================================
            INDEXOF FUNCTION
========================================*/

function indexOf (array, value) {
    if (array.length > 0 && array.includes(value)) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === value) {
                    return i;
                }
            }
        } else {
            return -1;
        }
  }

// indexOf([]) // -1

// indexOf([ 6 ], 6) // 0
// indexOf([ 5, 3, 1, 2, 4 ], 2) // 3
// indexOf([ 20, 10, 0, -10, -20 ], 5) // -1

// indexOf([ '7', '8', '9' ], 7) // -1
// indexOf([ 7, 7, 7 ], 7) // 0

/*========================================
            DOUBLE #'S IN ARRAY
========================================*/

function doubleNumbers (arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

/*========================================
        DOUBLE ELEMENTS IN STRING
========================================*/

function doubleLetters(str) {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}

/*========================================
          INTERLEAVE TWO ARRAYS
========================================*/

function interleave (arr, arr2) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr2[i]);
    }
    
    return newArr;
};

// if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

/*========================================
     RETURN ARRAY OF CERTAIN VALUE
========================================*/

function createRange(num, val) {
    let result = [];
    
    for(let i = 0; i < num; i++) {
        result.push(val);
    }
    
    
    
    return result;
};

// if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]

/*========================================
        TURN ARRAY INTO OBJECT
========================================*/

function flipArray(arr) {
    let result = {};
    
    for(let i = 0; i < arr.length; i++) {
        result[arr[i]] = i;
    }
    
    
    
    return result;
};

/*========================================
            ARRAYS TO OBJECT
========================================*/

function arraysToObject(arr) {
    let obj = {};
    
    for(let i = 0; i < arr.length; i++) {
        obj[arr[i][0]] = arr[i][1];
    }
    
    
    return obj;
};

// If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }


/*========================================
    REVERSE STRING W/O SPLIT OR REVERSE
========================================*/

function reverseString(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    
    return newStr;
};

/*========================================
        REPEAT HALF A STRING
========================================*/

function repeats(str) {
    
    if(str.length % 2 !== 0) {
        return false;
    }
    
    let first = str.substr(0, str.length / 2);
    let second = str.substr(str.length / 2);
    
    return first === second;
};

// Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

// Example:

// If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
// If you pass it "yay" then it should return false because it's odd
// If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"

/*========================================
    EVERY OTHER CHARACTER IN STRING
========================================*/

function everyOther(str) {
    let parseStr = '';
    
    for(let i = 0; i < str.length; i+=2) {
        parseStr+=str[i];
    }
    
    
    return parseStr;
};

/*========================================
     IF EVERY CHAR IN STRING IS SAME
========================================*/

function allEqual(str) {
    if(str[1] !== str[0]) {
        return false;
    } else {
        return true;
    }
};

// If you pass "aaa" it should return true
// If you pass "aba" it should return false

/*========================================
        SUM OF EVERY CHAR IN STRING
========================================*/

function sumLetters(str) {
    let sum = 0;
    let splitStr = str.split('');
    
    for (let i = 0; i < splitStr.length; i++) {
        sum += parseInt(splitStr[i])
    }
    
    return sum;
};

// If you pass "45" it should return 9
// If you pass "246" it should return 12

/*========================================
        COUNT VOWELS IN STRING
========================================*/

function countVowels(str) {
    let result = 0;
    let vowels = "aeiou"
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                result++;
                }
            }
        }
    return result;
};

/*========================================
    SPLIT STRING INTO ARRAY OF LETTERS
========================================*/

function split(str) {
    let arr = [];
    
    for (let i = 0; i < str.length; i++){
        arr.push(str[i])
    }
    
    
    return arr;
  };
  
/*========================================
        RETURN ARRAY OF CODE POINTS
========================================*/

function getCodePoints(str) {
    let arr = [];
    
    for (let i = 0; i < str.length; i++) {
        arr.push(str.codePointAt([i]));
    }
    
    
    
    return arr;
};

// If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]

/*========================================
            MAP LETTERS INTO OBJ
========================================*/

function letterMap(str) {
    let obj = {};
    
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = i;
    }
    
    
    return obj;
};
// If you pass "Yo" it should return {Y: 0, o: 1}
// If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}

/*========================================
        COUNT LETTERS INTO OBJ
========================================*/

function letterCount(str) {
    let obj = {};

    for (let i of str) {
        if(obj.hasOwnProperty([i])) {
            obj[i] += 1;
        } else {
          obj[i] = 1; 
        }
    }
    
    return obj;
};

// If you pass "Yo" it should return {Y: 1, o: 1}
// If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}

/*========================================
        AT LEAST THREE ODD #'S
========================================*/

function threeOdds(num, num2) {
    let count = 0;
    for (let i = num; i < num2; i++){
        if(i % 2 !== 0){
            count++;
        }
    }
    if(count >= 3){
        return true;
    } else {
        return false;
    }
};

// If you pass 0,2 it should return false because the only number between 0 and 2 is 1
// If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5

/*========================================
    CREATE A STRING OF # OF LETTERS
========================================*/

function createString(num, letter) {
    let str = '';
    
    for (let i = 0; i < num; i++){
        str += letter;
    }
    
    return str;
};

// If you pass 3, "a" it should return "aaa"
// If you pass 2, "b" it should return "bb"

/*========================================
            FACTORIALIZE A #
========================================*/

function factorial (num) {
    if (num === 0) {
        return 1;
    }
    
    return num * factorial(num - 1);
};

/*========================================
        AN ARRAY OF #'S 1 TO I
========================================*/

function arrayOfNumbers(num) {
    let arr = [];
    
    for (let i = 1; i <= num; i++){
        arr.push(i);
    }
    
    return arr;
};
// If you pass 1 it should return [1]
// If you pass 3 it should return [1,2,3]

/*========================================
        OBJECT OF EVEN AND ODD #'S
========================================*/

function evenOdd(num, num2) {
    let obj = {};
    
    for (let i = num; i <= num2; i++) {
        if (num === 0 && num2 === 0){
            obj = {};
        } else if(i % 2 !== 0) {
            obj[i] = "odd"
            
        } else{ 
            obj[i] = "even"
            
        }
    }
    
    
    return obj;
};

// If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}

/*========================================
        ARRAY AND VALUE BOOLEAN
========================================*/

function every(arr, val) {
    
    let emptyarr = true;
    
    for(let i = 0; i < arr.length; i++) {
        if (arr !== val){
            emptyarr = false;
        }
        if (arr.pop() === val){
            emptyarr = true;
        }
    }
    return emptyarr;
};

// If you pass [1,1], 1 it should return true
// If you pass [1,2], 1 it should return false

/*========================================
        ARRAY AND IF ONE BOOLEAN MATCH
========================================*/

function some(arr, val) {
    let result = false;
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            result = true
        }
    }
    
    return result;
};

// If you pass [1,2], 1 it should return true
// If you pass [3,2], 1 it should return false

/*========================================
    ARRAY TO STRING WITHOUT .JOIN()
========================================*/

function toSentence(arr){
    let str = '';
    
    for(let i = 0; i < arr.length; i++){
        if(arr.length - 1 === i){
            str += ' and ' + arr[i]
        }else if(arr.length - 2 === i){
            str += arr[i]
        }else {
            str += arr[i] + ', '
        }
    }
    
    return str;
};

// If you pass ["Sue", "Will"] it should return "Sue and Will"
// If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/

/*========================================
                    ###
========================================*/





// RANDOM ALGOS, WILL ADD TOMORROW:

function acronym(arr){
    let str = '';
    
    for(let i = 0; i < arr.length; i++){
        str += arr[i][0];
    }
    
    return str;
};

function index(arr, str){
    let obj = {};
    
    for(let i = 0; i < arr.length; i++){
        obj[arr[i][str]] = arr[i];
    }
    
    
    return obj;
};

function invert(obj){
    let result = {};
    
    for(let i in obj){
        result[obj[i]] = i;
    }
    
    return result;
  };

  function addSignature(str, obj){
    let result = {};
    let signed = "-signed"
    
    for (let i in obj){
        result[i + signed] = obj[i] + ' - ' + str;
    }
    
    
    return result;
};

function pairs(obj){
    let arr = [];
    
    for (let i in obj){
        let newKey = i + ' - ' + obj[i];
        arr.push(newKey);
    }
    
    return arr;
};

function sumValues(obj){
    let sum = 0;
    
    for (let i in obj){
        sum += obj[i];
    }
    
    
    return sum;
};

function biggestProperty(obj){
    let highestVal;
    let prop = 0;
    
    for (let i in obj){
        if (obj[i] > prop) {
            prop = obj[i];
            highestVal = i;
        }
        
    }
    
    return highestVal;
};

function keyForValue(obj, val){
    
    for (let i in obj){
        if(obj[i] === val){
            return i;
        }
    }
};

function containsValue(obj, val){
    for (let i in obj){
        if (obj[i] === val){
            return true;
        }
    }
    return false;
};

//sum of numbers between two integers
function getSum( a, b ) {

    if (a === b){
      return a
    }

    let result = 0

    if (a < b){
      for (let i = a; i <= b; i++){
        result += i
      }
    } else {
      for (let i = b; i <= a; i++){
        result += i
    }
  }
    return result
}

//rotate array
// For example, with n = [1,2,3,4,5,6,7] and k = 3, the array is rotated to [5,6,7,1,2,3,4].
//Make sure not to return a copy of the array.

function rotate(arr,k) {
    let k = arr.slice(0, k + 1)
    let j = arr.slice(k + 1)
  
      j.push(...k)
      arr = j
  
      return arr
  }