exports.min = function min (array) {
  if (min.arguments.length == 0 || array.length === 0) {
    return 0;
  } else {
    return array.sort((a, b) => a - b)[0];
  }
}

exports.max = function max (array) {
  if (max.arguments.length == 0 || array.length == 0) {
    return 0;
  } else {
    return array.sort((a, b) => b - a)[0];
  }
}

exports.avg = function avg (array) {
  if (avg.arguments.length == 0 || array.length == 0) {
    return 0;
  } else {
    return array.reduce((sum, current) => sum + current, 0) / array.length;
  }
}
