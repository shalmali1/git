http://community.topcoder.com/stat?c=problem_statement&pm=12112

SRM 592

function LittleElephantAndBooks(arr, number) {
    var lazyPages = 0;
    arr.sort(function sortc(a,b) {return a-b });
    
    for (var i = 0; i < number-1; i++) {
        lazyPages = lazyPages + arr[i];
    }
    lazyPages += arr[number];
    return lazyPages;
}

LittleElephantAndBooks([74, 86, 32, 13, 100, 67, 77],2)
