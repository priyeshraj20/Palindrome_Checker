const getPalindrome = (inputText) =>{
  const orginalText = inputText; 
  const formatText = inputText.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  if (formatText === [...formatText].reverse().join('')){
    console.log("Palindrome");
  }
  else {
    console.log("Not a Palindrome");
  }
}

getPalindrome("Malayalam");
getPalindrome("mal yalam");
getPalindrome("_eye");
getPalindrome("A man, a plan, a canal. Panama");
