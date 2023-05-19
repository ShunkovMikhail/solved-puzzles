function sameCase(a, b){
if (a.replace(/[a-z]/i, '') == '' && b.replace(/[a-z]/i, '') == '') {
  if ((a == a.toLowerCase() && a != a.toUpperCase()) == (b == b.toLowerCase() && b != b.toUpperCase())) {
  return 1;
  } else {
  return 0;
  }
} else {
return -1;
}
}
