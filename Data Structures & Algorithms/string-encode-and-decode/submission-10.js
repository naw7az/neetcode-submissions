class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const delimeter = 'x';
        let encoded_string = ``;
        for (let str of strs) {
            encoded_string = `${encoded_string}${str.length}${delimeter}${str}`
        }
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const delimeter = 'x';
        const decoded_strs = [];
        let current = 0;
        let number = '';
        while (current < str.length) {
            if (str[current] === delimeter) {
                decoded_strs.push(str.slice(current + 1, current + 1 + parseInt(number)))
                current += parseInt(number) + 1;
                number = '';
            } else {
                number = `${number}${str[current]}`
                current += 1;
            }
        }

        return decoded_strs;
    }
}
