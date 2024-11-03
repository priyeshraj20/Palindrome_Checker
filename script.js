const userInput = document.getElementById("text-input")
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");


const getPalindrome = inputText =>{
  if(inputText === ""){
    alert("Please input a value");
    return;
  }
  const orginalText = inputText;
  const formatText = inputText.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `<strong>${orginalText}</strong> ${
   formatText === [...formatText].reverse().join('') ?"is" : "is not"} a palindrome`;
  resultDiv.innerHTML = resultMsg;
};

checkPalindromeBtn.addEventListener("click", () => {
getPalindrome(userInput.value);
userInput.value = "";
});
