import {expect} from "chai";
import {distance, sortByDistance} from "../src/distance";

describe("distance", function() {
  it("calculates distance with the good ol' Pythagorean Theorem", function() {
    let origin = {x: 0.0, y: 0.0};
    let point = {x: 3.0, y: 4.0};
    expect(distance(point, origin)).to.equal(5);
  });
});

describe("sortByDistance", function() {
  it("sortsByDistance", function() {
    let places = [{name: "Far away", x: 100, y: 50}, {name: "Nearby", x: 20, y: 10}];
    let origin = {name: "Origin", x: 0, y: 0};

    let sorted = sortByDistance(origin, places);
    expect(sorted[0].name).to.equal("Nearby");
    expect(sorted[1].name).to.equal("Far away");
  });
});
