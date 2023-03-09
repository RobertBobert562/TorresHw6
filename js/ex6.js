/* HW 6
   Example 6 JavaScript code
*/

console.log("Torres Output from HW 6 Example 6");


const words = [{  term: "Procrastination",  definition: "Avoidance of doing a task that needs to be accomplished"}, {  term: "Tautology",  definition: "logical argument constructed in such a way that it is logically irrefutable"}, {  term: "Oxymoron",  definition: "figure of speech that juxtaposes elements that appear to be contradictory"}];

const contentDiv = document.getElementById("content");

// create dl element
const dl = document.createElement("dl");

// loop through words array and create dt and dd elements for each
words.forEach(word => {
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  
  // add strong tag to term and set definition
  dt.innerHTML = `<strong>${word.term}</strong>`;
  dd.textContent = word.definition;
  
  // add dt and dd to dl
  dl.appendChild(dt);
  dl.appendChild(dd);
});

// add dl to content div
contentDiv.appendChild(dl);
