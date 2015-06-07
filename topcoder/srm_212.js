//http://community.topcoder.com/stat?c=problem_statement&pm=1692


SRM 212


function Yahtzee(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) 
    {
        if(!map[arr[i]]) 
        {
            map[arr[i]] = 1;
        }
        else
        {
            map[arr[i]]++;
        }
    }
    var max = 0;
    for (var e in map) 
    {
        if ((e * map[e]) > max) 
        {
            max = e * map[e];    
        }   
    }
    return max;
}

Yahtzee([5, 3, 5, 3, 3]);