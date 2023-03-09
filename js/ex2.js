/* HW 6
   Example 2 JavaScript code
*/

console.log("Torres Output from HW 6 Example 2");

const displayText400 = () => {
    // select all elements with class "level400"
    const courseList = document.querySelectorAll(".level400"); 
     // display text content of each selected element
    courseList.forEach(course => console.log(course.textContent));
  }
  
  //at first the code displayed an error
  //this is because the original .400level is not a valid selector
  //this is because class names cannot begin with a number 
  //I reversed the class name to 'level400'
displayText400();