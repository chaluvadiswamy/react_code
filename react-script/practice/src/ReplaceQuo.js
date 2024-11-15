import React, { useState } from 'react';

export default function ReplaceQuo() {
    const [strVal, setStrVal] = useState('');
    const [result, setResult] = useState('');

    const processString = () => {
        const k = strVal;
        const chars = k.split('');
        
        if (chars[0] !== '?') { 
            setResult('NO');
        } else {
            for (let i = 0; i < chars.length; i++) {
                if (chars[i] === '?') {
                    // Replace '?' with the appropriate character
                    // Check adjacent characters to ensure they are the same
                    chars[i] = chars[i - 1] || 'a'; // If no previous character, default to 'a'
                    if (chars[i] === chars[i + 1]) {
                        console.log("chars---",chars[i]);
                        chars[i] = chars[i - 1] === 'a' ? 'b' : 'a'; // Flip the character if adjacent ones are the same
                    }
                }
            }

            const processedString = chars.join('');
            setResult(processedString);
        }
    };

    return (
        <div>
            <input
                type='text'
                name='str-name'
                value={strVal}
                onChange={(e) => setStrVal(e.target.value)}
                placeholder="Enter a string with '?'"
            />
            <button onClick={processString}>Process</button>
            <div>
                Result: {result}
            </div>
        </div>
    );
}
