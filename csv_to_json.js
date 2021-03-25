// Reading the file using default 
// fs npm package  
const fs = require("fs"); 
csv = fs.readFileSync("people_summary/report-card3.xlsx - report.csv") 
  
// Convert the data to String and 
// split it in an array 
var array = csv.toString().split("\r"); 
  
// All the rows of the CSV will be  
// converted to JSON objects which  
// will be added to result in an array 
let result = {}; 
let weights = {}
// The array[0] contains all the  
// header columns so we store them  
// in headers array 
// let headers = array[0].split(', ') 
headers = ["Turnout, % of Voting-age Citizens",	"18-24 Turnout Gap, Citizens, 2018", "Minority Turnout Gap, Citizens, 2018", "Contribution Limits per 4 Years",	"3rd Party Ballot Access",	"Nonpartisan or Bipartisan Redistricting, to Avoid Gerrymanders",	"Good VBM List, Tracks Address Changes & Deaths",	"Vote by Mail with No Specific Reason?",	"Mail Application or Ballot to All?",	"Process Ballots on Receipt, before Election Day?",	"Number of Days when Voters Can Cure Signature Problems, after Election Day",	"VBM Ballots Counted, as % of VBM Received, 2018",	"Do Votes Have a Paper Trail?",	"Hand Tally Audits, to Check Computer Tallies?",	"Good Audit Sample, to Check Computer Tallies?", "Audit All Contests? Number of Contests Checked", "Public Can Recount with Copies of Ballots"]

//define intial weights
for (let i = 0; i < headers.length; i++) { 
  weights[headers[i]] = 5
}

console.log(headers)
// Since headers are separated, we  
// need to traverse remaining n-1 rows.  
for (let i = 1; i < array.length; i++) { 
  let obj = {} 
  arr = array[i].split(',') 
  console.log(arr)
  for (let index = 2; index < arr.length-1; index++) {
    const element = arr[index];
    console.log(index)
    console.log(element)
    if (headers[index-2] != "3rd Party Ballot Access"){
      obj[headers[index-2]] = parseFloat(element)
    }
    
  }
  result[arr[0].split('  ')[0].trim()] = obj
} 
  
// Convert the resultant array to json and  
// generate the JSON output file. 
let json = JSON.stringify(result); 
fs.writeFileSync('output.json', json)

json = JSON.stringify(weights); 
fs.writeFileSync('weights.json', json)