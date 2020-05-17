function adding(){
	var a = document.getElementById("myForm").elements[0].value;
	var b = document.getElementById("myForm").elements[1].value;
	var n1 = parseInt(a,10);
	var n2 = parseInt(b,10);
	//document.append(n1+n2);
	document.getElementById('ans').innerHTML = "The sum is "+(n1+n2);
}