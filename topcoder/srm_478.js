//http://community.topcoder.com/stat?c=problem_statement&pm=11020

SRM 478


function thePouring(capacity, bottles, fromId, toId) {
    
    for(var i = 0; i < fromId.length; i++) {
        var amount = Math.min(bottles[fromId[i]],
                              capacity[toId[i]] - bottles[toId[i]]);
        bottles[fromId[i]] -= amount; 
        bottles[toId[i]] += amount;
    }
    return bottles;
}

thePouring([30, 20, 10],[10, 5, 5],[0, 1, 2],[1, 2, 0]);

