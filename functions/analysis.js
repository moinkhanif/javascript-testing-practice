const analysis = (arr) => {
  const sum = arr.reduce((num, val) => num + val, 0);

  return {
    length: arr.length,
    average: sum / arr.length,

    max: Math.max(...arr),
    min: Math.min(...arr),
  };
};


module.exports = analysis;