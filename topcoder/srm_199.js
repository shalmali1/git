//http://community.topcoder.com/stat?c=problem_statement&pm=1046

//SRM 199

function reverseStr(str) {
    var result = "";
    for (var j = str.length-1; j >= 0; j--) 
    {
        result = result + str[j];
    }
    return result;
}

function StringMult(str, num) {
    var res = "";
    if (str.length === 0 || num === 0) 
        return str;
    
    var temp;
    if (num < 0) {
        temp = reverseStr(str);
    } else {
        temp = str;
    }
    for (var i = 0; i < Math.abs(num); i++) 
    {
        res = res + temp;
    }
    return res;
}

StringMult("Great", -4);