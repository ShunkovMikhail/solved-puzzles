function cleanedCounts(data) {
  var res = [data[0]];

  for (var i = 1; i < data.length; i++) {
    if (data[i] >= res[i - 1]) {
    res.push(data[i])
    } else {
    res.push(res[i - 1])
    }
  }

  return res;
}
