let strReader = "--> START //src/core:graph_test\n" +
    "=== RUN   TestAddTarget\n" +
    "--- PASS: TestAddTarget (0.00s)\n" +
    "=== RUN   TestAddPackage\n" +
    "--- PASS: TestAddPackage (0.00s)\n" +
    "=== RUN   TestTarget\n" +
    "--- PASS: TestTarget (0.00s)\n" +
    "=== RUN   TestRevDeps\n" +
    "--- PASS: TestRevDeps (0.00s)\n" +
    "--- SKIP: TestAllDepsBuilt (0.00s)\n" +
    "    graph_test.go:44: Temporarily disabled until we resolve issue T12532.\n" +
    "=== RUN   TestAllDepsResolved\n" +
    "--- PASS: TestAllDepsResolved (0.00s)\n" +
    "=== RUN   TestDependentTargets\n" +
    "--- PASS: TestDependentTargets (0.00s)\n" +
    "=== RUN   TestSubrepo\n" +
    "--- PASS: TestSubrepo (0.00s)\n" +
    "PASS\n"

let rootArray = strReader.split('===');
console.log(rootArray)

let obj = {};
let overallSkipCount = 0;
let overallFailCount = 0;
let overallPassCount = 0;
rootArray.map((item)=>{
  item.includes('SKIP') ? overallSkipCount++ : null;
  item.includes('PASS') ? overallPassCount++ : overallFailCount
})

let testFileName = rootArray[0].substr(rootArray[0].indexOf(':') + 1,rootArray[0].length-2);

console.log('File name : ', testFileName)
console.log('overallPass:', overallPassCount)
console.log('overallFail:', overallFailCount)
console.log('overallSkip:', overallSkipCount)
