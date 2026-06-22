class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const delimeter = '#';
        if (strs.length === 0) return delimeter;
        let encodedString = '';
        for (let str of strs) {
            encodedString = encodedString + str.length + delimeter + str;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const delimeter = '#';
        if (str === delimeter) return [];
        const decodedString = [];
        let currentNum = '';
        let i = 0;
        while (i < str.length) {
            if (str[i] === delimeter) {
                decodedString.push(str.slice(i + 1, i + Number(currentNum) + 1));
                i += Number(currentNum) + 1;
                currentNum = ''
            } else {
                currentNum = currentNum + str[i];
                i += 1;
            }
        }
        return decodedString;
    }
}