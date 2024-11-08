import React from 'react'

const  BinaryGapCalculator = (N) => {
    // Convert N to binary representation
    const binaryString = N.toString(2);
    
    let maxGap = 0;
    let currentGap = 0;
    let counting = false;
    
    // Iterate through the binary representation
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            // If a '1' is encountered, update the maxGap if needed
            if (counting) {
                maxGap = Math.max(maxGap, currentGap);
            }
            counting = true;
            currentGap = 0;
        } else if (counting) {
            // If a '0' is encountered while counting, increment currentGap
            currentGap++;
        }
    }
    
    return maxGap;
}

// Test cases
console.log(BinaryGapCalculator(1041)); // Output: 5
console.log(BinaryGapCalculator(529));   // Output: 0


export default BinaryGapCalculator;