//http://community.topcoder.com/stat?c=problem_statement&pm=8539

//SRM 387


function GuessingNextElement(arr) {
    var s = arr[1] - arr[0];
    var p = arr[1] / arr[0];
    var result = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        if ((arr[i+1] - arr[i]) == s) 
        {
            result = arr[arr.length -1] + s;
        }
        else if ((arr[i+1] /arr[i]) == p)
        {
            result = arr[arr.length -1] * p
        }
    }
    return result;
}

GuessingNextElement([22,220,2200,22000]);
