// Data from data.js
let tableData = data;

// Reference to the table body
const tbody = d3.select("tbody");

// Render the table onto the webpage
function rendertable() {
  tbody.text("");
  tableData.forEach(function(ufoSighting) {
    let row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      let cell = row.append("td").text(value);
      cell.text(value);
    });
  });
}

// Filter table button
const filterButton = d3.select(".btn-default");

// onClick handler
filterButton.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input from all the filters available
  let inputDate = d3.select("#datetime");
  let inputCity = d3.select("#city");
  let inputState = d3.select("#state");
  let inputCountry = d3.select("#country");
  let inputShape = d3.select("#shape");

  // Get the value property from the inputs and change it to lowercase to match the dataset
  let inputDateValue = inputDate.property("value");
  let inputCityValue = inputCity.property("value").toLowerCase();
  let inputStateValue = inputState.property("value").toLowerCase();
  let inputCountryValue = inputCountry.property("value").toLowerCase();
  let inputShapeValue = inputShape.property("value").toLowerCase();

  // Filter the tableData and extract the variables needed from the data
  tableData = tableData.filter(function(datum) {
    let datumDate = datum.datetime;
    let datumCity = datum.city;
    let datumState = datum.state;
    let datumCountry = datum.country;
    let datumShape = datum.shape;

    // Conduct an if statement to be able to filter on multiple categories on the webpage
    if (
      (datumDate === inputDateValue || inputDateValue === "") &&
      (datumCity === inputCityValue || inputCityValue === "") &&
      (datumState === inputStateValue || inputStateValue === "") &&
      (datumCountry === inputCountryValue || inputCountryValue === "") &&
      (datumShape === inputShapeValue || inputShapeValue === "")
    ) {
      return true;
    }
    return false;
  });

  // Re-rendering the table
  rendertable();
});

// Initial table rendering
rendertable();
