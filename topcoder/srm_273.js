//http://community.topcoder.com/stat?c=problem_statement&pm=5879

SRM 273

function AimToTen(arr) {
    var total = 0;
    var count = 0;
    
    for (var i = 0; i < arr.length; i++) 
    {
        total = total + arr[i];
    }

    while(true) 
    {
        if ((total/(arr.length+count)) >= 9.5)
            break;
        else    
        {
            total = total + 10;
            count++;
        }
    }
    return count;
}

AimToTen([9, 10, 10, 9]);