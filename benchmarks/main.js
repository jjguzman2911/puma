/*
* Benchmark Engine Rules for Developers
*   1-Define the tests Suites to run using the filename of the javascript 
*   in the suites array in runAllEnabledTestSuites() method in the form {"name" : testSelectors_1, "enabled": true|false }.
*   2-The name of the suite inside the file must be the same as the name of the file.
*   3-Include the JavaScript file in the benchmark.html head.
*/

function runAllEnabledTestSuites(){  
  
  // Define the test suites using the names as in the files
  var suites = [ 
                {"name" : testSelectors_1, "enabled": true }, 
                {"name" : testSelectors_2, "enabled": false },
                {"name" : testSelectors_3, "enabled": false},
                {"name" : testChecked, "enabled": false},
                {"name" : testParseNumber, "enabled": false},
                {"name" : testLoopFor, "enabled": false}                  
               ];
  
  //Run the enabled suites
  for(var i=0; i<suites.length; i++) {
    if(suites[i].enabled === true && suites[i].enabled !== undefined) {     
      suites[i].name.execute();
    }
  }
};