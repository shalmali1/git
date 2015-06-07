http://community.topcoder.com/stat?c=problem_statement&pm=11631

SRM 532

function DengklekTryingToSleep(arr) {
   var result = 0;
    arr.sort(function(a, b){return b-a});
    
    for(var i = 0; i < arr.length -1; i++)
    {
        if (arr[i+1] - arr[i] !== 1)
        {
            result = result + arr[i] - arr[i+1] - 1;
        }
    }
    return result;
}
DengklekTryingToSleep([5, 3, 2, 7]);