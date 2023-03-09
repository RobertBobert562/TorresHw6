/* HW 6
   Example 3 JavaScript code
*/

console.log("Torres Output from HW 6 Example 3");

const changeParagraphStyle = () => {
    const paragraphs = document.getElementsByTagName("p");
  
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i];
      paragraph.style.fontWeight = "bold";
      paragraph.style.backgroundColor = "yellow";
    }
  }
  
  changeParagraphStyle();
  
