/* HW 6
   Example 4 JavaScript code
*/

console.log("Torres Output from HW 6 Example 4");

const addCollegeLink = () => {
    const collegeLink = document.createElement("a");
    collegeLink.href = "https://www.csulb.edu/college-of-business";
    collegeLink.textContent = "College of Business";
  
    const isLink = document.querySelector("#is");
    const linksList = isLink.parentElement;
  
    linksList.insertBefore(collegeLink, isLink);
  };
  
  addCollegeLink();
  