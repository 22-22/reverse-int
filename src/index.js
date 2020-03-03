module.exports = function reverse (n) {
        
        //return the absolute value of a number
        let nPositive = Math.abs(n);

        let str = String(nPositive);

        let arr = str.split('');

        //if the last item of the array is 0, remove it
        if (arr[arr.length - 1] == 0) arr.pop();
        
        let strReversed = arr.reverse().join('');

        let result = +strReversed;
        
        return result;
  
}
