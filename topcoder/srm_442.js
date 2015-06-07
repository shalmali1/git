//http://community.topcoder.com/stat?c=problem_statement&pm=10465


SRM 442
                        
                        
function SimpleWordGame(arr,dict) {
    var result = 0;
    var map = {};
    for ( i = 0; i < arr.length; i++)
	{
		for ( j = 0; j < dict.length; j++)
		{
			if (arr[i] == dict[j])
			{
                if (!map[arr[i]]) {
				    map[arr[i]] = 1;
				    result = result + (arr[i].length) * (arr[i].length);
                }
			}
		}
	}
    return result;
}

SimpleWordGame(["orange", "orange"],
               ["strawberry", "orange", "grapefruit", "watermelon"]);