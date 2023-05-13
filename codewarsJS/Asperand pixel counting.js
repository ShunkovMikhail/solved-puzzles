function countPixels(k) {
  var square = k * k;
  
  if (k > 2) {
  square = ((k - 2) * 4) + 4; //(outer perimeter - inner perimeter) didn't work WTF
  }
  
  var o = k * 4 + 6;
  
  return square + o;
}
