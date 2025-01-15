const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
	let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	let reverseStr = cleanStr.split("").reverse().join("");
	if (cleanStr === reverseStr) {
		return (result.innerText = `${str} is a palindrome`);
	} else {
		return (result.innerText = `${str} is not a palindrome`);
	}
}

function inputValue() {
	const str = textInput.value;
	return str;
}

function checkBtn(event) {
	event.preventDefault();
	if (!textInput.value) {
		alert("Please input a value");
	}
	if (textInput.value) {
		const str = textInput.value;
		isPalindrome(textInput.value);
		return str;
	}
}
textInput.addEventListener("input", inputValue);
checkButton.addEventListener("click", checkBtn);