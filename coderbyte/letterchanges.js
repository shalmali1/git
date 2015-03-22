function letterChanges (str) {
var result = ""; 
var i = 0;
    for (i = 0 ; i < str.length ; i++) {
        if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
            var currentChar = str.charCodeAt(i) + 1;
            var charResult = String.fromCharCode(currentChar);
            if (charResult == "a" || charResult == "e" ||
                charResult == "i" || charResult == "o" ||
                charResult == "u") 
            {
                result = result + charResult.toUpperCase();
            } else {
                result = result + charResult;
            }
        } else {
            result = result + str.charAt(i);
        }
    }
  return result;
}

letterChanges("Shal");