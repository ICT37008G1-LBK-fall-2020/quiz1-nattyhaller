/* 1 */
  
  console.log(getMaxNumberArray([11, 9, -2, 99]));
  
  function getMaxNumberArray(Arr) {
    return Math.max(...Arr);
  }




/* 2 */

  console.log(getPositiveNumbersAverage([11, 9, -2, 99]));

function getPositiveNumbersAverage(numbersArray) {
    const positiveNumbersArray = numbersArray.filter((number) => {
      return number > 0;
    });
  
    const positiveNumbersSum = positiveNumbersArray.reduce((acc, number) => {
      return acc + number;
    }, 0);
  
    return positiveNumbersSum / positiveNumbersArray.length;
  }
  



/* 3 */


