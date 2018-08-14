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

