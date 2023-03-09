/* HW 6
   Example 5 JavaScript code
*/

console.log("Torres Output from HW 6 Example 5");


const outputDiv = document.getElementById("output");

// create table element and set CSS class
const table = document.createElement("table");
table.classList.add("number-table");

// create table rows and cells
for (let i = 1; i <= 12; i++) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  
  // set cell content and CSS classes
  cell.textContent = i;
  cell.classList.add("center-align");
  if (i % 4 === 0) {
    cell.classList.add("blue-background");
  }
  
  // add cell to row and row to table
  row.appendChild(cell);
  table.appendChild(row);
}

// add table to output div
outputDiv.appendChild(table);
