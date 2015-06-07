//http://community.topcoder.com/stat?c=problem_statement&pm=6442


SRM 320

function StringSegment(str) {
    var count = 1;
    var sum = 0;
    var len = 0;
    for (var i = 0; i < str.length-1; i++) {
        if (str.charAt(i) == str.charAt(i+1)) 
        {
            count++;
        }
        else
        {
            sum = sum + count;
            count = 1;
        }
        if (str.charAt(i) !== str.charAt(i+1)) {
            len++;
        }

    } 
    return (sum +count)/(len+1);
    
}


StringSegment("aabbccdd");
