//i always add this just for incase ...loads your DOMContent before the script runs
document.addEventListener("DOMContentLoaded", (event) => {
  //brings my html elements into my js and stores them in variables
  let cypherInput = document.querySelector(".cypher-input");
  let cypherDisplay = document.querySelector(".cypher-display");

  //creates a function
  function encrypt(cypherInput) {
    let result = "";
    //for loop to loop trough the input one letter at a time and getting the character code using charCodeat()
    for (let i = 0; i < cypherInput.length; i++) {
      let charCode = cypherInput.charCodeAt(i);
      let encryptedCharCode;
      //if to check if uppercase and add 15
      if (charCode >= 65 && charCode <= 90) {
        encryptedCharCode = ((charCode - 65 + 15) % 26) + 65;
        //else if for lowercase and add 15
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedCharCode = ((charCode - 97 + 15) % 26) + 97;
        //everything else remains the same
      } else {
        encryptedCharCode = charCode;
      }
      //builds the result with built in function string.fromCharCode
      result += String.fromCharCode(encryptedCharCode);
    }
    return result;
  }
  //adds event litener to run my function when enter is pressed and display the result
  cypherInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let encryptedValue = encrypt(cypherInput.value);
      cypherDisplay.innerHTML = encryptedValue;
    }
  });
});
/*my info came from:
 https://www.techtarget.com/whatis/definition/ASCII-American-Standard-Code-for-Information-Interchange ,

 https://stackoverflow.com/questions/67352524/difference-between-acii-code-and-key-codes,
 https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes,
 https://www.prepbytes.com/blog/general/ascii-values-of-alphabet/#:~:text=Each%20character%20is%20associated%20with,to%20122%20for%20lowercase%20letters.,
 https://www.w3schools.com/jsref/jsref_charcodeat.asp*/
