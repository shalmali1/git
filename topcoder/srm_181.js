//http://community.topcoder.com/stat?c=problem_statement&pm=2268

SRM 181

function KiloMan(arr,str) {
    var hit = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'S' && (arr[i] === 1 || arr[i] === 2)) {
            hit++;
        }
        if (str.charAt(i) === 'J' && arr[i] > 2) {
            hit++;
        }
    }
    return hit;
}

KiloMan([1,3,2,3,3,1,2,2,1],'JJSSSJSSJ');
