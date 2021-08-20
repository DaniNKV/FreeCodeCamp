const romans = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

function convertToRoman(num) {
  let numberArr = []
  const maxBase = maxBase10(num);
  divideByBase(num, maxBase, numberArr)

  return numberArr
    .filter(num => num !== 0)
    .map(num => translate(num))
    .join('')

}
function translate(number) {
  const base = maxBase10(number);
  const romansKeys = Object
    .keys(romans)
    .map(item => Number(item));

  const correctKey = romansKeys
    .filter(key => 
      number <= key + 3 * base 
      &&
      number > key - 2 * base)
    .reverse()
    .slice(0, 1)
    .join()

  const timesRepeat = Math.abs(correctKey - number) / base
  const baseKey = romans[base]

  if(correctKey - number === 0) {
    return romans[correctKey]
 
  }else if(correctKey - number > 0) {
    return baseKey.repeat(timesRepeat) + romans[correctKey]
  }

  else if(correctKey - number < 0) {
    return romans[correctKey] + baseKey.repeat(timesRepeat)
  }



}

convertToRoman(250);

function divideByBase(number, base, arr) {
  if(base < 1) {
    return
  }
  arr.push(Math.floor(number / base) * base)
  divideByBase(number % base, base / 10, arr)
}

   // console.log(Math.floor(number / base) * base, number % base)


function maxBase10(number) {
  let maxBase = 1;
  
  for (let i = 1 ; number / i >= 10 ; i *= 10) {
    maxBase = i * 10
  }

  return maxBase

}
