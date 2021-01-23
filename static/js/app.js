// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

data.forEach((UFOdata) => {
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runSearch);
form.on("submit",runSearch);

// Complete the event handler function for the form
function runSearch() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("datetime");

     // Get the value property of the input element
    var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = people.filter(person => person.bloodType === inputValue);

  console.log(filteredData);


};