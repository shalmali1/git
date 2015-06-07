//http://community.topcoder.com/stat?c=problem_statement&pm=7503


SRM 340


function CssPropertyConverter(str) {
    var result = str;
    for (var i = 0; i < result.length-2; i++) {
        if (result.charAt(i) == "-") {
            result = result.substring(0,i) + 
                     result.charAt(i+1).toUpperCase() +
                     result.substring(i+2, result.length);
        }
    }
    return result;
}

CssPropertyConverter("top-border-width");
