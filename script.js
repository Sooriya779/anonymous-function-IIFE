1. Print odd numbers in an array:

// Anonymous Function
const printOddNumbers = function(arr) {
  for (let num of arr) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
};

// IIFE
(function(arr) {
  for (let num of arr) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);


2. Convert all the strings to title caps in a string array:

// Anonymous Function
const convertToTitleCaps = function(arr) {
    const titleCapsArr = [];
    for (let str of arr) {
      titleCapsArr.push(str.charAt(0).toUpperCase() + str.slice(1));
    }
    return titleCapsArr;
  };
  
  // IIFE
  const titleCapsArr = (function(arr) {
    const titleCapsArr = [];
    for (let str of arr) {
      titleCapsArr.push(str.charAt(0).toUpperCase() + str.slice(1));
    }
    return titleCapsArr;
  })(["hello", "world", "example"]);
  
  console.log(titleCapsArr);
  
  3.Sum of all numbers in an array:

  // Anonymous Function
const sumArray = function(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };
  
  // IIFE
  const sum = (function(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  })([1, 2, 3, 4, 5]);
  
  console.log(sum);

  4.Return all the prime numbers in an array:

  // Anonymous Function
const getPrimeNumbers = function(arr) {
    const primes = [];
    for (let num of arr) {
      let isPrime = true;
      if (num === 1) {
        isPrime = false;
      } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primes.push(num);
      }
    }
    return primes;
  };
  
  // IIFE
  const primes = (function(arr) {
    const primes = [];
    for (let num of arr) {
      let isPrime = true;
      if (num === 1) {
        isPrime = false;
      } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primes.push(num);
      }
    }
    return primes;
  })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  
  console.log(primes);

  5.Return all the palindromes in an array:

  // Anonymous Function
const getPalindromes = function(arr) {
    const palindromes = [];
    for (let str of arr) {
      const reversedStr = str.split("").reverse().join("");
      if (str === reversedStr) {
        palindromes.push(str);
      }
    }
    return palindromes;
  };
  
  // IIFE
  const palindromes = (function(arr) {
    const palindromes = [];
    for (let str of arr) {
      const reversedStr = str.split("").reverse().join("");
      if (str === reversedStr) {
        palindromes.push(str);
      }
    }
    return palindromes;
  })(["madam", "hello", "level"]);
  
  console.log(palindromes);

  6.Return median of two sorted arrays of the same size:

  // Anonymous Function
const getMedianOfSortedArrays = function(arr1, arr2) {
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
      return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
    } else {
      return mergedArr[mid];
    }
  };
  
  // IIFE
  const median = (function(arr1, arr2) {
    const mergedArr = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
      return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
    } else {
      return mergedArr[mid];
    }
  })([1, 3, 5], [2, 4, 6]);
  
  console.log(median);

  7.Remove duplicates from an array:

  // Anonymous Function
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
  };
  
  // IIFE
  const uniqueArr = (function(arr) {
    return [...new Set(arr)];
  })([1, 2, 2, 3, 4, 4, 5]);
  
  console.log(uniqueArr);

  
8. Rotate an array by k times:

// Anonymous Function
const rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  };
  
  // IIFE
  const rotatedArr = (function(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  })([1, 2, 3, 4, 5], 3);
  
  console.log(rotatedArr);
  