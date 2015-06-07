http://community.topcoder.com/stat?c=problem_statement&pm=4503

SRM 238

function ArrayHash(arr) {
    var hash = 0;
	for (var i = 0; i < arr.length; i++)
	{
        var str = arr[i];
		for (var j = 0; j < str.length; j++)
		{
			hash = hash + (str.charCodeAt(j) - 65) + i + j;
		}
	}
	return hash;
}

ArrayHash(["CBA","DDD"]);
