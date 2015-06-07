//http://community.topcoder.com/stat?c=problem_statement&pm=13195

SRM 624

function CostofDancing(num, arr) {
    var result = 0;
    arr.sort();
    for (var i = 0; i < num; i++) {
        result = result + arr[i];
    }
    return result;
}

CostofDancing(1, [2, 2, 4, 5, 3]);

