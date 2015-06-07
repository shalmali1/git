//http://community.topcoder.com/stat?c=problem_statement&pm=11813

SRM 561

function FoxAndVacation(total, arr) {
    arr.sort(function(a, b){return a-b});
    console.log(arr);
		var count = 0;
		for (var i = 0; i < arr.length; i++)
		{
			if (arr[i] <= total)
			{
				count++;
				total = total - arr[i];
			}
			else break;
		}
		return count;
	}

FoxAndVacation(10,[7,1,5,6,1,3,4]);
