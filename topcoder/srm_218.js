//http://community.topcoder.com/stat?c=problem_statement&pm=3100

SRM 218

function AccessLevel(arr, priv) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (priv > arr[i]) {
            str = str + 'D';
        }
        else
        {
            str = str + 'A';
        }
    }
    return str;
}

AccessLevel([34,78,9,52,11,1],49); 

