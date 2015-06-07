http://community.topcoder.com/stat?c=problem_statement&pm=7774

SRM 354

function search(arr, elem) {
    for (var k = 1; k < arr.length; k++) {
        if (arr[k] === elem) {
            return k;
        }
    }    
}
function Thimbles(swap) {
    var arr = [0, 1, 2, 3];
    for (var i = 0; i < swap.length; i++) {
        var s = swap[i];
        var p1 = search(arr, parseInt(s.charAt(0)));
        var p2 = search(arr, parseInt(s.charAt(2)));
        var temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
    }
    return arr[1];
}

Thimbles(["1-2", "3-2", "1-2", "2-1", "2-1", "3-2", "1-3", "3-1", "1-2"]);
Thimbles(["2-3", "1-3", "2-3", "2-1", "3-1"]);


