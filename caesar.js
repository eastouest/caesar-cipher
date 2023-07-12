function decryptCharacter(char) { // char is a 1-char string
  if (char.charCodeAt() < 78 && char.charCodeAt() >= 65) {
    return String.fromCharCode(char.charCodeAt() + 13)
  } else if (char.charCodeAt() >= 78) {
    return String.fromCharCode(char.charCodeAt() - 13)
  } else {
    return char
  }
}

function rot13(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += decryptCharacter(str[i]);
  }

  return newStr
}


console.log(rot13("SERR PBQR PNZC"));
