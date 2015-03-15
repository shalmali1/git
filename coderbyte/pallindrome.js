//Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 


function reverseString(str) {
  var rev = "";
  var length = str.length;
  for (var j = length - 1; j >= 0 ; j--) {
  	rev = rev + str.charAt(j);
  }
  return rev;    
}


function Palindrome(str) {
  var rev = reverseString(str);
  if (rev == str)
  	return "true"
  else
    return "false";
}
   

Palindrome("MADAM");           
