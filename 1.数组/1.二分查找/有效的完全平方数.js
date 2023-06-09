var isPerfectSquare = function (num) {
  let left = 1,
    right = num
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (mid * mid > num) right = mid - 1
    else if (mid * mid < num) left = mid + 1
    else return true
  }
  return false
}

console.log(isPerfectSquare(16))
