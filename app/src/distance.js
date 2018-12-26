// distance takes in two points, represented as objects with numeric x and y
// values and returns the distance between them
//
// [TODO] Use great-circle distance, not 2D distance, which we're only using to
// keep the code in this tutorial short
function distance(p2, p1) {
  let yDist = p2.y - p1.y;
  let xDist = p2.x - p1.x;
  return Math.sqrt(Math.pow(yDist, 2) + Math.pow(xDist, 2));
}

// sortByDistance takes in your location and an array of points and returns the
// array of points sorted
function sortByDistance(myPt, points) {
  return points.sort((pt1, pt2) => distance(pt1, myPt) - distance(pt2, myPt));
}

module.exports = {distance, sortByDistance};
