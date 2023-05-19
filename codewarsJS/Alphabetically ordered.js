function alphabetic(s) {
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var p = 0;
  for (var i1 = 0; i1 < s.length; i1++) {
    for (var i2 = 0; i2 < alphabet.length; i2++) {
    if (alphabet[i2] == s[i1]) {
      if (p <= i2) {
      p = i2;
      } else {
      return false;
      }
    }
    }
  }
  return true;
}
