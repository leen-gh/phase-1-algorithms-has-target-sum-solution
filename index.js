function hasTargetSum(array, target) {
  /*// Write your algorithm here
  
  let sum =0
  for(let i=0;i<array.length;i++){
    for(let n = 0; n < array.length;  n++){
      if (n != i){
        sum = array[i]+array[n]
        if(sum == target){
          return true
        }
      }
    }
   
  }
  return false*/

  const seenNumbers = new Set();

  for (let num of array) {
    //console.log(seenNumbers)

    const complement = target - num;

    if (seenNumbers.has(complement)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  first loop take elemnet  in the array 
  in the sec loop i will add element to the other elemnt 
  checking if the sum equal to target retunn true else complete looping 
  if the loop finish without returning the fun will retuen false
*/

/*
  Add written explanation of your solution here
  i  just try the property method with two loops 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 6, 6], 12));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 6, 6], 25));
}

module.exports = hasTargetSum;
