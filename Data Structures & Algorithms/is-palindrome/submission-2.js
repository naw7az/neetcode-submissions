class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // lower case
        s = s.toLowerCase();
        let str = '';

        for (let char of s) {
            if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
                str += char
            }
        }

        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
