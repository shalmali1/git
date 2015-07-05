//http://community.topcoder.com/stat?c=problem_statement&pm=8541

//SRM 386


function move(arr, start, end, dir) {
    var count = 1;
    
    var max = arr[start];
    start = start + dir;
    
    while (start !== end)
    {
        if (arr[start] > max) {
            max = arr[start];
            count++;
        }
        start += dir;
    }
    return count;
}

function TrophyShelf(arr) {
    var result = [];
    result.push(move(arr, 0, arr.length-1, 1));
    result.push(move(arr, arr.length-1, 0, -1));
    return result;
}

TrophyShelf([1,2,5,2,1]);

