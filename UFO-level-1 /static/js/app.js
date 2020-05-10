/////create variables 
var tableData = data;
var tbody = d3.select("tbody");
var infoTable = d3.select("table");
////
infoTable.attr("class", "table table-striped");
///function for each // append values
function construct(ufos) {
    ufos.forEach((rows)=>{
        var row=tbody.append("tr");
        Object.entries(rows).forEach(([key,value])=>{
            var cell=row.append("td");
            cell.text(value)
        })

    
    })
}

construct(tableData);

//locate buttons
var filterButton= d3.select("#filter-btn");
var dateInput = d3.select("#datetime");

//filtering
filterButton.on("click", function() {
    d3.event.preventDefault(); 

    tbody.html("");
    
    var callValue = dateInput.property("value");

    //console.log(callValue);

    var actualTable = tableData.filter(tableData => tableData.datetime === callValue);
    

    construct(actualTable);
});

