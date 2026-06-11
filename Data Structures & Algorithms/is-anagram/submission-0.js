class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       const occur1 = new Map();
       const occur2 = new Map();

       for(let i=0; i<s.length; i++) {
          const char = s[i];  
          if(occur1.has(char)) {
            occur1.set(char, occur1.get(char) + 1);
          } else {
            occur1.set(char, 1);
          }  
       }
       for(let i=0; i<t.length; i++) {
          const char = t[i];  
          if(occur2.has(char)) {
            occur2.set(char, occur2.get(char) + 1);
          } else {
            occur2.set(char, 1);
          }  
       }

       function checkEquality(map1, map2) {
           if(map1.size !== map2.size) {
                return false;
           }

           for(let [key, value] of occur1) {
             if(!map2.has(key) || map2.get(key) !== value) {
                return false
             }
           }

           return true; 
       } 

       return checkEquality(occur1, occur2);
    }
}
