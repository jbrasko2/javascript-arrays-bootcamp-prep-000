var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var newArray = array;
  newArray = [element, ...array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray (array, element) {
    array.unshift(element)
    return array
  }
function addElementToEndOfArray(array, element) {
    var newArray = array;
    newArray = [...array, element]
    return newArray
  }
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray (array) {
  return array.slice(1);
}
