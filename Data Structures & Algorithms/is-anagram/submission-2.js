class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const objS = {};
       const objT = {};

       // both need to have same length to be anagram
       if (s.length !== t.length) return false;

       for (let i = 0; i < s.length; i ++) {
            objS[s[i]] = (objS[s[i]] || 0) + 1 
       } 

        for (let i = 0; i < t.length; i ++) {
            objT[t[i]] = (objT[t[i]] || 0) + 1 
       } 

        const sKeys = Object.keys(objS);

       for (let char of sKeys) {
        if (objS[char] !== objT[char]) {
            return false;
        }
       }

       return true;
       
    }
}
