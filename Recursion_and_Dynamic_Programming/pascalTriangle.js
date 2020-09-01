function calcCell(rowNumber, cell) {
  if (cell === 0 || cell === rowNumber) {
    return 1
  }
  else {
    return calcCell(rowNumber - 1, cell - 1) + calcCell(rowNumber - 1, cell)
  }
}

function printPascal(testVariable) {
  res = []
  for (let cell = 0; cell <= testVariable; cell++) {
    res[cell] = calcCell(testVariable, cell)
  }
  return res
}

console.log(printPascal(5))
