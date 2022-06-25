let x = Number(prompt("Enter first number: "));

var op = prompt("Enter operation sign between *, -, +, & /: ");

let y = Number(prompt("Enter second number: "));

if (op == "+") {
	ans = x + y;
}
if (op == "-") {
	ans = x - y;
}
if (op == "*") {
	ans = x * y;
}
if (op == "/") {
	ans = x / y;
}

alert(ans);