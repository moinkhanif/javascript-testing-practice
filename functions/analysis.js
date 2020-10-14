const analysis = (arr) => {
  const sum = arr.reduce((num, val) => num + val, 0);
  //  length: arr,
  //  average: sum / length,

  //  max: Math.max(...arr),
  //  min: Math.min(...arr),

   return {
   	 // sum: arr.reduce((num, val) => num + val, 0),
     length: arr.length,
     average: sum / arr.length,

     max: Math.max(...arr),
     min: Math.min(...arr),
   }

};


module.exports = analysis;