//http://community.topcoder.com/stat?c=problem_statement&pm=2000

SRM 265

function FontSize(str, upper, lower) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (i > 0)
            sum+=1;
        if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z')
        {
    		sum = sum + upper[str.charCodeAt(i) - 65];
    	}
    	else if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z')
    	{
    		sum = sum + lower[str.charCodeAt(i) - 97];
    	}
        else if (str.charAt(i) === ' ')
    	{
    		sum = sum + 3;
    	}
    }
	return sum;
}

console.log(FontSize("two  spaces",
                        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
                        [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]));
                        