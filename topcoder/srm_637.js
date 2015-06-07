//http://community.topcoder.com/stat?c=problem_statement&pm=13505

SRM 637

function GreaterGameDiv2(arr1,arr2) {
    var count = 0;
    for (var i = 0; i < arr1.length; i++) 
    {
        if (arr1[i] > arr2[i]) 
        {
            count++;
        }
    }
    return count;
}

GreaterGameDiv2([1,3],[4,2]);