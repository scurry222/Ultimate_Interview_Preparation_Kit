// Problem statement #

// It should have a constructor that defines the properties xpoint, ypoint, and shape.

// The constructor should initialize xpoint, ypoint, and shape to 0, 0, and null if the values for these properties are not passed to the constructor.

// Only a single instance of the class can be made by defining the function getConfiguration.

// Input #
// The getConfiguration method invoked

// Output #
// The instance created after the getConfiguration function is invoked

// Sample input #
// getConfiguration({ xpoint: 8, ypoint : 9, shape : rectangle }); //first call
 
// getConfiguration({ xpoint : 2, ypoint : 4, shape : circle }); //second call
 
// Sample output #
// ConfigureVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }
 
// ConfigureVals { xpoint: 8, ypoint: 9, shape: 'rectangle' }

let instance = null

class ConfigureVals {
    constructor(configObj) {
        this.xpoint = configObj.xpoint || 0;
        this.ypoint = configObj.ypoint || 0;
        this.shape = configObj.shape || null;
    }
    static isInstance (configObj) {
        if (!instance) instance = new ConfigureVals(configObj)
        return instance
    }
}
