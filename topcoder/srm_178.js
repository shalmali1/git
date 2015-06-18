
//http://community.topcoder.com/stat?c=problem_statement&pm=2272

//SRM 178

function SimpleCalculator(str) {
    
    for (var i = 0; i < str.length-1; i++) {
       if (str[i] == '*' || str[i] == '-'
       || str[i] == '+' || str[i] == '/') {
           result1 = str.substring(0,i) * 1;
           result2 = str.substring(i+1, str.length) * 1;
           
        if (str[i] == '+')
	        result1 = result1 + result2;
	    else if (str[i] == '-')
	        result1 = result1 - result2;
	    else if (str[i] == '*')
	        result1 = result1 * result2;
	    else if (str[i] == '/')
	        result1 = Math.floor(result1 / result2);
       }
    }
    return result1;
}

SimpleCalculator("5/3");
