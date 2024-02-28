
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
      var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Geography/Countries%20and%20Territories.csv"

//these are the variables we will use from our document 
  var country = getColumn(url,1)
  var countryCode = getColumn(url,3)
  var region = getColumn(url,4)
  var incomeLevel = getColumn(url,5)
  var populations = getColumn(url,6)
  var gdp = getColumn(url,9)

//this function takes an inputted income level as its parameter and returns the countries within the level
  function getCountryFromIncome (income){
    var matches = [];
    for(var i = 0; i < incomeLevel.length; i++){
      if (incomeLevel[i].toLowerCase().includes(income.toLowerCase())){
        matches.push(country[i]);
      }
    }
    return matches;
  }
  // console.log (getCountryFromIncome("high")) 
  // console.log (getCountryFromIncome("middle"))   



  //this function takes an inputted country and returns its 2 letter country code 
  function countryCodeFromCountry(countryName){
    var matches = [];
    for(var i = 0; i < country.length; i++){
      if (country[i].toLowerCase().includes(countryName.toLowerCase())){
        matches.push(countryCode[i]);
  }
}
return matches;
}
// console.log (countryCodeFromCountry("brazil")); 

//this function takes an inputted country name and prints its population 
function countryPopulation (countryName){
  var population = 0; 
  for(var i = 0; i < country.length; i++){
    if(country[i].toLowerCase().includes(countryName.toLowerCase())){
      population=(populations[i])
    }
  }
  return population

}
console.log(countryPopulation("United States"));  



