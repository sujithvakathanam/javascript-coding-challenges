// How to compare two Objects and return as True or False
const actualOptions = {
    minSize : '5000',
    maxSize : '15000',
    enabled : 'true'
}

const expectedOptions = {
    maxSize : 15000,
    enabled : true,
    minSize : 5000,
}

function assertOptions(actualOptions, expectedOptions){
    actualOptions.minSize = Number(actualOptions.minSize);
    actualOptions.maxSize = Number(actualOptions.maxSize);
    actualOptions.enabled = actualOptions.enabled === 'true'; // Best method to convert string to Boolean

    const sortedActualOptions = {};
    //Object.keys returns an array of keys
    Object.keys(actualOptions).sort().forEach(key => {
        sortedActualOptions[key]= actualOptions[key];
    })
    console.log('SortedActualOptions is', sortedActualOptions);

    const sortedExpectedOptions = {};
    Object.keys(expectedOptions).sort().forEach(key =>{
        sortedExpectedOptions[key] = expectedOptions[key];
    })
    console.log('sortedExpectedOptions is', sortedExpectedOptions);

    return JSON.stringify(sortedExpectedOptions) === JSON.stringify(sortedActualOptions);

}


console.log(assertOptions(actualOptions, expectedOptions));