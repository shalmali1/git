//http://community.topcoder.com/stat?c=problem_statement&pm=4017


SRM 233


function JustifyText(arr) {

var max = 0;
	for (var i = 0; i < arr.length; i++)
		max = Math.max(arr[i].length, max);
		console.log(max);
		for (var j = 0; j < arr.length; j++)
			while (arr[j].length < max){
				arr[j] = " " + arr[j];
			}
		return arr;
	}

JustifyText(["BOB","TOMMY","JI"]);
