// from data.js
var tableData = data;

// YOUR CODE HERE!

//select body
var tbody = d3.select("tbody");

// create function and generate UFO data
function populate(inputData) {
  inputData.forEach((UFOdata) => {
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })};
populate(tableData);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");
var formCity = d3.select("#city");
var formState = d3.select("#state");
var formCountry = d3.select("#country");
var formShape = d3.select("#shape");


// Create event handlers 
button.on("click", runSearch);
form.on("submit",runSearch);

// Complete the event handler function for the form
function runSearch() {
    // Get the value property of the filter all
    var filterAll = {
      datetime: form.property("value").trim(),
      city: formCity.property("value").toLowerCase().trim(),
      state: formState.property("value").toLowerCase().trim(),
      country: formCountry.property("value").toLowerCase().trim(),
      shape: formShape.property("value").toLowerCase().trim()
    };

    // Prevent the page from refreshing
    d3.event.preventDefault();
    

    //Place table data in filteredData
    var filteredData = tableData;

    // Run each filter on the data
    Object.entries(filterAll).forEach(([key, value]) => { if (value.length > 0) filteredData = filteredData.filter(sighting => value === sighting[key]);});

    // clear body
    tbody.html("");

    //populate filtered data
    populate(filteredData);

    // log data
    console.log(filteredData);


};