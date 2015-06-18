//http://community.topcoder.com/stat?c=problem_statement&pm=2868

//SRM 200


function NoOrderOfOperations(str) {
    
    var ope1, ope2;

    ope1 = str[0] * 1;

    for (var i=1; i< str.length; i+=2)
    {
	    ope2 = str[i+1] * 1;
	
	    if (str[i] == '+')
	        ope1 = ope1 + ope2;
	    else if (str[i] == '-')
	        ope1 = ope1 - ope2;
	    else if (str[i] == '*')
	        ope1 = ope1 * ope2;
	    else if (str[i] == '/')
	        ope1 = ope1 / ope2;
    }
    return ope1;
  }


NoOrderOfOperations("1*2*3*4*5*6*7*8*9");
