/* HW 6
   Example 3 JavaScript code
*/

console.log("Torres Output from HW 6 Example 3");

//finds all p elements
const changeParagraphStyle = () => {
    const paragraphs = document.getElementsByTagName("p");
  
    //for loop that bolds and highlights in yellow p elements
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i];
      paragraph.style.fontWeight = "bold";
      paragraph.style.backgroundColor = "yellow";
    }
  }
  
  changeParagraphStyle();
  
