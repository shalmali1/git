//http://community.topcoder.com/stat?c=problem_statement&pm=6003

SRM 283

function DiagonalDisproportion(arr) {
    var majorSum = 0;
    var numStr;
    for (var i = 0; i < arr.length; i++) {
        numStr = arr[i];
        majorSum += parseInt(numStr.charAt(i));
    }
    var minorSum = 0;
    for (var j = arr.length-1; j >= 0; j--) {
        numStr = arr[j];
        minorSum += parseInt(numStr.charAt(arr.length-j-1));
    }
    return (majorSum - minorSum);
}
