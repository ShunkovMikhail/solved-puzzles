function quadrant(x, y) {

if (y > 0) {
  if (x > 0) {
  return 1;
  }
  return 2;
}

if (y < 0) {
  if (x < 0) {
  return 3;
  }
  return 4;
}

}
