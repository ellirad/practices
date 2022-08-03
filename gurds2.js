
  function numberToAccountingString(number) {
    if (!number) return
    
    if (number < 0) return `(${Math.abs(number)})`

    //The main purpose of function
    return number.toString()
  }

  
console.log(numberToAccountingString(3))
console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(-4))