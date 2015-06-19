
//http://community.topcoder.com/stat?c=problem_statement&pm=2988

//SRM 210


function capitalize(str) {
    if (str.length === 0)
        return str;
    var k = 1;
    var result = str.charAt(0).toUpperCase();
    while (k < str.length - 1) {
        if (str.charAt(k) === " " && str.charAt(k+1) !== " ") {
            result = result + " " + str.charAt(k+1).toUpperCase();
            k++;
        } else {
            result = result + str.charAt(k);
        }
        k++;
    }
    return result + str.charAt(str.length-1);
}

capitalize("more than  one   space    between     words");
