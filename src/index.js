
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortArr = [];

  if (matrix === undefined) return []
  else if (matrix.length !== 0) {
    matrix.forEach((element, index) => {
      if (index % 2 !== 0) {
        element.reverse();
        sortArr.push(element)
      } else {
          sortArr.push(element)
      }
    })
  }
    


  return sortArr.flat(1);
}

