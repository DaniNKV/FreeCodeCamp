function rot13(str) {
  return str
    .split('')
    .map(item => item.charCodeAt())
    .map(num => {
      if(num >= 65 && num <= 90){
        return num - 13 >= 65 ? num - 13 : 90 - (65 - (num - 12))
      }else {
        return num
      }})
    .map(num => String.fromCharCode(num))
    .join('');
}



rot13("SERR PBQR PNZC");

//.map(num => )
