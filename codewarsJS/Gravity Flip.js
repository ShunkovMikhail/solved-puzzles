const flip = (d, a) => {
  var A = a;
  
  if (d == 'R') {
    A.sort(function(a, b){return a - b});
  } else {
    A.sort(function(a, b){return b - a});
  }
  return A;
}

// ----------- other-solutions -----------

const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);

const flip=(d, a)=>{
  if(d === 'R') return a.sort((a,b)=>a-b);
  if(d === 'L') return a.sort((a,b)=>b-a);
}
