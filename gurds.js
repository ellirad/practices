function changeNumber(n) {
    if (n < 0) {
      return '(' + Math.abs(n) + ')'
    } else {
      return n.toString()
    }
  }
  
console.log(changeNumber(3))
console.log(changeNumber(undefined))
console.log(changeNumber(-4))