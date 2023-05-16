function quadrant_segment(A, B) {

  var point = [A, B];
  var q = [];

  for (var i = 0; i < 2; i++) {

    var x = point[i].x;
    var y = point[i].y;

  if (y > 0) {
  q[i] = 2;
  if (x > 0) {
  q[i] = 1;
  }
}

  if (y < 0) {
  q[i] = 4;
  if (x < 0) {
  q[i] = 3;
  }
}

}

if (q[0] == q[1]) {
  return false;
}

return true;

}
