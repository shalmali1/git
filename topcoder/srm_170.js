//http://community.topcoder.com/stat?c=problem_statement&pm=1930

//SRM 170


function LevelUp(arr, exp) {
    
    for (var i = 0; i < arr.length; i++) {
        if (exp < arr[i]) {
            return Math.abs(exp - arr[i]);
        }
    }
    return 0;
}

LevelUp([150,450,900,1800],133) 