import distanceTwoPoints from "./distanceTwoPoints";

const circleContains = (circle1LatCenter, circle1LngCenter, radiusCircle1Meters, circle2LatCenter, circle2LngCenter, radiusCircle2Meters,) => {
  return distanceTwoPoints(circle1LatCenter,circle1LngCenter,circle2LatCenter, circle2LngCenter) < (radiusCircle1Meters + radiusCircle2Meters);
}

export default circleContains;
