http://community.topcoder.com/stat?c=problem_statement&pm=13004

SRM 609

function MagicalStringDiv2(str) {
    var count1 = 0;
    var count2 = 0;
    var mid = Math.floor(str.length/2);
    var left = str.substring(0,mid);
    var right = str.substring(mid, str.length);

    for (var i = 0; i < left.length; i++) 
    {
        if (left.charAt(i) !== '>') 
        {
            count1++;
        }
    }
    
    for (var j = 0; j < right.length; j++)
    {
        if (right.charAt(j) !== '<') 
        {
            count2++;
        }
    }
    return count1+count2;
}

MagicalStringDiv2(">><<><");