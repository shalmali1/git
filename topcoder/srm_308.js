//http://community.topcoder.com/stat?c=problem_statement&pm=6528

SRM 308
 
 
 function MedianOfNumbers(arr) {
    arr.sort(function(a, b){return b-a});
    var mid = Math.floor(arr.length/2);
    if (arr.length % 2 === 0)
        return -1;
    else
    {
        return arr[mid];
    }
}

MedianOfNumbers([32, 54, 27, 4, 69, 96, 73, 1, 100, 15, 21]);
