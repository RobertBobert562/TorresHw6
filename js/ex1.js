/* HW 6
   Example 1 JavaScript code
*/

console.log("Torres Output from HW 6 Example 1");

//for of loop iterates through all child nodes of <body> element
//each node is logged into console
const bodyNodes = () => {
    const nodes = document.body.childNodes;
    for (const node of nodes) {
      console.log(node);
    }
  }
  
  bodyNodes();