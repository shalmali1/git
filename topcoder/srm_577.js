//http://community.topcoder.com/stat?c=problem_statement&pm=12459

SRM 577


function EllysNewNickname(str) {
    var count = 0;
    var result =0;
    for(var i = 0; i < str.length; i++) {
        if ((str.charAt(i) == 'a' || str.charAt(i) == 'e'
        || str.charAt(i) == 'i' || str.charAt(i) == 'o'
        || str.charAt(i) == 'u' || str.charAt(i) == 'y') &&
        (str.charAt(i+1) == 'a' || str.charAt(i+1) == 'e'
        || str.charAt(i+1) == 'i' || str.charAt(i+1) == 'o'
        || str.charAt(i+1) == 'u' || str.charAt(i+1) == 'y')) 
        {
            count++;
            result = str.length- count;
        }
    }
    return result;
}

EllysNewNickname("tourist")
