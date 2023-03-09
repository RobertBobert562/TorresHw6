/* HW 6
   Example 7 JavaScript code
*/

console.log("Torres Output from HW 6 Example 7");

console.log("Output from Example 7");

// prompt user for two integers
const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));

// check for valid input
if (isNaN(num1) || isNaN(num2)) {
  // display error for invalid input
  const errorMsg = document.createElement("div");
  errorMsg.classList.add("error");
  if (isNaN(num1) && isNaN(num2)) {
    errorMsg.textContent = `"${num1}" and "${num2}" are not valid integers`;
  } else if (isNaN(num1)) {
    errorMsg.textContent = `"${num1}" is not a valid integer`;
  } else {
    errorMsg.textContent = `"${num2}" is not a valid integer`;
  }
  document.getElementById("content").appendChild(errorMsg);
} else {
  // calculate sum and display on page
  const sum = num1 + num2;
  const sumText = document.createElement("div");
  sumText.innerHTML = `The sum of <span style="color:red;font-weight:bold">${num1}</span> and <span style="color:red;font-weight:bold">${num2}</span> is <span style="color:red;font-weight:bold">${sum}</span>`;
  document.getElementById("content").appendChild(sumText);
}
