//http://community.topcoder.com/stat?c=problem_statement&pm=6090

SRM 336


function VowelLatin(str) {
var vow = "";
var nvow = "";
for (var i = 0; i < str.length; i++)
      {
	if (str.charAt(i) == 'a' ||
	    str.charAt(i) == 'i' ||
	    str.charAt(i) == 'u' ||
	    str.charAt(i) == 'e' ||
	    str.charAt(i) == 'o' ||
	    str.charAt(i) == 'A' ||
	    str.charAt(i) == 'I' ||
	    str.charAt(i) == 'U' ||
	    str.charAt(i) == 'E' ||
	    str.charAt(i) == 'O' )
	  vow += str.charAt(i);
	else
	  nvow += str.charAt(i);
      }
    return nvow + vow;
  }
  
VowelLatin("application");
