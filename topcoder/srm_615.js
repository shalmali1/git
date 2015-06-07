//http://community.topcoder.com/stat?c=problem_statement&pm=13089

SRM 615

function AmebaDiv2(arr, num) {
    for (var i = 0; i < arr.length; i++) 
    {
        if (num == arr[i]) 
        {
            num = num + arr[i];
        }
    }
    return num;
}

AmebaDiv2([817,832,817,832,126,817,63,63,126,817,832,287,823,817,574], 63);


