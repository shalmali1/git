
//http://community.topcoder.com/stat?c=problem_statement&pm=4448

//SRM 236

function MassiveNumbers(str1,str2) {
    var result1 = "";
    var result2 = "";
    var result3 = "";
    var result4 = "";
    var i;
    for (i = 0; i < str1.length-1; i++) 
    {
        if(str1[i] == '^' ) 
        {
            result1 = str1.substring(0,i);
            result2 = str1.substring(i+1,str1.length);
        }
    }
   
   for (i = 0; i < str2.length-1; i++) 
    {
        if(str2[i] == '^' ) 
        {
            result3 = str2.substring(0,i);
            result4 = str2.substring(i+1,str2.length);
        }
    }
    if ((result4 * Math.log(result3)) > (result2 * Math.log(result1))) {
        return str2;
    }
    else
    return str1;
}

MassiveNumbers("999^1000","1000^999")

