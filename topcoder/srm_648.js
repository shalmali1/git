http://community.topcoder.com/stat?c=problem_statement&pm=13650

SRM 648

function KitayutaMart2(K,T){
    var price = K;
    var res = 1;
    
    while (price < T) {
        K = K * 2;
        price = price + K;
        res++;
    }
    return res;
}

KitayutaMart2(150,1050);
