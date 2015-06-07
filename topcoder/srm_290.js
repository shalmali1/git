//http://community.topcoder.com/stat?c=problem_statement&pm=5982

SRM 290

function SpeedTyper(str, arr) {
    var avg = 0;
    var diff = [];
    var diffSum = arr[0];
    
    diff[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        diffSum = diffSum +  arr[i] - arr[i-1];
        diff[i] = arr[i] - arr[i-1];
    }
    
    avg = diffSum / arr.length;
    var result = "";

    for (var k = 0; k < diff.length; k++) {
        if (diff[k] > avg) {
            result = result + str.charAt(k);
        }
    }
    return result;
}

SpeedTyper("keyboard", [100,200,300,500,600,800,900,1200]);
