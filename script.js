var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Geography/Countries%20and%20Territories.csv"
var country = getColumn(url,1);
var countryCode = getColumn(url,3);
var regions = getColumn(url,4);
var income = getColumn(url,5);
var population = getColumn(url,6);
var gdp = getColumn(url,9);

function getCountry(region){
  var matches = [];
  for(var i=0; i<regions.length; i++){
    if(regions[i].toLowerCase().includes(region.toLowerCase())){
      matches.push(country[i]);
    }
  }
  return matches;
}
//console.log(getCountry("South Asia"))

function highestGDP(region){
  var highest = 0;
  var richestCountry = "";
for(var i = 0; i < regions.length; i++){
  if(regions[i] == region){

  }
  if((regions[i] == region && parseFloat(gdp[i]) >= highest)){
 
    richestCountry = country[i];
    highest = parseFloat(gdp[i]);
  
  }

}
if(richestCountry != ""){
  return richestCountry;
}
return "";
}

console.log(highestGDP("North America"))

// function getOldestTeam(division){
//   var oldest = 3000;
//   var oldestTeamname
// for(var i = 0; i < divisions.length; i++){
//   if((divisions[i] == division && joined[i] <= oldest)){
//     oldestTeamname = team[i];
//     oldest = joined[i];
//   }

// }
// if(total == 0){
//   return -1;
// }
// return total;
// }


//this is the utils file 
function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }


      //this is the link to our country document 
