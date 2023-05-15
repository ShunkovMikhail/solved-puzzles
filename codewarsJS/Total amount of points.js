function points(games) {
  var Points = 0;
  for (var i = 0; i < 10; i++) {
    var x = parseInt(games[i][0]);
    var y = parseInt(games[i][2]);
    if (x - y > 0) {
    Points += 3;
    }
    if (x - y == 0) {
    Points += 1;
    }
  }
  return Points;
}
