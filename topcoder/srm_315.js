//http://community.topcoder.com/stat?c=problem_statement&pm=6635&rd=9995

SRM 315

function rosePetals(arr){
    var sum = 0;
    var lookup = [0,0,0,2,0,4,0];
    for (var i = 0; i < arr.length; i++) {
       sum = sum + lookup[arr[i]]; 
    }
    return sum;
}

rosePetals([1, 5, 3, 2, 5]);