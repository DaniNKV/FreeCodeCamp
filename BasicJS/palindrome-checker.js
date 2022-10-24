function palindrome(str) {
  let filteredStr = str
    .replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '')
    .toLowerCase()
    .split('')
    .filter(item => /[\w\d]/gi.test(item))

  const strLength = filteredStr.length
  const oddLength = strLength % 2 === 0;
  const halfStr = Math.floor(strLength / 2)
  
  const firstHalfStr = filteredStr
    .slice(0, halfStr)
    .join('');
  
  const lastHalfStr = filteredStr
    .slice(oddLength ? halfStr : halfStr + 1, )
    .reverse()
    .join('');

  if (firstHalfStr === lastHalfStr) {
    console.log(firstHalfStr, lastHalfStr )
    return true
  }
  else {
    return false
  }
}



palindrome("never odd or even");
