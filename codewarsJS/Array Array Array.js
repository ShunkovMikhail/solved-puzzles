function explode (x){
var score = parseInt((x[0] + x[1] + "").replace(/\D/g, ''), 10);
var res = [];

if (score > 0) {
  for (var i = 0; i < score; i++) {
  res.push(x);
  }
} else if (score == 0) {
return [];
} else {
return "Void!";
}
return res;
}
