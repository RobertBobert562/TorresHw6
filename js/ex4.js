/* HW 6
   Example 4 JavaScript code
*/

console.log("Torres Output from HW 6 Example 4");

const addCollegeLink = () => {
    //creates link element in js
    const collegeLink = document.createElement("a");
    collegeLink.href = "https://www.csulb.edu/college-of-business";
    collegeLink.textContent = "College of Business";
  
    //uses query selector to find is
    const isLink = document.querySelector("#is");
    const linksList = isLink.parentElement;
  
    //inserts link before is
    linksList.insertBefore(collegeLink, isLink);
  };
  
  addCollegeLink();
  