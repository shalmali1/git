
//http://community.topcoder.com/stat?c=problem_statement&pm=13521

SRM 638

function NamingConvention(str) {
    var s = "";
    for (var i = 0; i < str.length-1; i++) {
        if (str.charAt(i) == '_') 
        {
            s = s + str.charAt(i+1).toUpperCase();
            i++;
        }
        else
        {
            s = s + str.charAt(i);
        }
    }
    return s + str.charAt(i);
}

NamingConvention("sum_of_two_numbers");
