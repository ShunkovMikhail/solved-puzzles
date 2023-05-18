function validParentheses(parenStr) {
  var j = 0;
  var l = 0;

  for (var i = 0; i < parenStr.length; i++) {
    if (parenStr[i] == "(") {
    j++;
    }

    if (parenStr[i] == ")") {
    l++; 
    }

    if (l > j) {
    return false;
    }
  }

  if (j != l) {
  return false;
  }

return true;
}
