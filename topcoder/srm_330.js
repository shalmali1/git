http://community.topcoder.com/stat?c=problem_statement&pm=7263

SRM 330

function getSortness(arr) {
    var sum = 0;
    var countRight = 0;
    var countLeft = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        for (var j = i-1; j >= 0; j--) 
        {
            if (arr[j] > arr[i]) 
            {
                countLeft++;
            }
        }
        for (var k = i+1; k < arr.length; k++) 
        {
            if (arr[k] < arr[i]) 
            {
                countRight++;
            }
        }
    }
    console.log(countLeft);
    console.log(countRight);
    sum = (countLeft + countRight)/arr.length;
    return sum;

}

getSortness([3,2,1]);