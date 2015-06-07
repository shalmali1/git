// http://community.topcoder.com/stat?c=problem_statement&pm=11229


SRM 490
               
               
function LuckyCounter(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        var str = arr[i];
        if (str.charAt(0) == str.charAt(4) && str.charAt(1) == str.charAt(3)) 
        {
            count++;
        }
        else if (str.charAt(0) == str.charAt(3) && str.charAt(1) == str.charAt(4)) 
        {
            count++;
        }
        else if(str.charAt(0) == str.charAt(1) && str.charAt(3) == str.charAt(4))
        {
            count++;
        }
    }
    return count;
}

LuckyCounter(["12:21", "11:10"]);