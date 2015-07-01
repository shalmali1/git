//http://community.topcoder.com/stat?c=problem_statement&pm=12325

//SRM 564


function reverseStr(str) {
    var res = "";
    for (var i = str.length-1; i >= 0; i--) {
        res = res + str[i];
    }
    return res;
}

function FauxPalindromes(str) {
    if (str == reverseStr(str)) {
        return "Palindrome";
    }
    var result = "";
    for (var i = 0; i < str.length; i++) 
    {
        if (i === str.length-1 || str[i] !== str[i+1]) {
            result = result + str[i];
        }
    }
    if (result == reverseStr(result))
        return "Faux";
    else
        return "Not Even Faux"
}

FauxPalindromes("AAAAANNAA");