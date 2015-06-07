//http://community.topcoder.com/stat?c=problem_statement&pm=3452

SRM 224

function reverseStr(str) {
    var result = "";
    for (var i = str.length-1; i >= 0; i--) {
        result = result + str.charAt(i);
    }
    return result;
}
function InsideOut(str) {
    
    var len = str.length / 2;
    var left = reverseStr(str.substring(0, len));
    var right = reverseStr(str.substring(len, str.length));
    return left + right;
    
}

InsideOut("RUT OWT SNEH HCNERF EERHTEGDIRTRAP A DNA  SEVODELT");