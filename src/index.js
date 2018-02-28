module.exports = function solveEquation(equation) {
  var x, xx, a0, a, b0, b, c, d, x1, x2, len;
  var arr = [];
  arr = equation.split(' ');
  len = arr.length;

//get a
  xx = arr.indexOf('x^2');

  if (xx == -1) {
    a = 0;
  }

  if (xx == 0) {
    a = 1;
  }

  if (xx == 1) {
    a = -1;
  }

  if ((xx == 2) && (arr[0] != '-')) {
    a = arr[0];
  }

  if (xx == 3) {
    a = -1 * arr[1];
  }

//get b
  x = arr.indexOf('x');

  if (x == -1) {
    b = 0;
  }

  if (x == 0) {
    b = 1;
  }

  if (x == 1) {
    b = -1;
  }

  if (x == 3) {
    b0 = 1;
    if (arr[0] == '-') {
      b0 = -1;
    }
    b = b0 * arr[x - 1];
  }

  if (((x - xx) == 1) && (xx != -1)){
    if (arr[x - 1] == '+') {b = 1} else {b = -1}

  }

  if (((x - xx - 2) == 2) && (xx != -1) && (xx != 0)){
    if (arr[x - 3] == '+') {b = arr[x - 2]} else {b = -1*arr[x - 2]}

    }

// get c

  if (x == len - 1) { c = 0 } else {if (arr[x + 1] == '+') {c = arr[x + 2]} else {c = -1 * arr[x + 2]}}

  x1 = ((-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
  x2 = ((-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a));

  var result = [];
  x1 = Math.round(x1);
  x2 = Math.round(x2);

  if (x1 > x2) {
    result = [x2, x1];
  } else {
    result = [x1, x2];
  }
  return result;
}
