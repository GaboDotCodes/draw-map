import distanceTwoPoints from "./distanceTwoPoints";

const circleContains = (circleLatCenter, circleLngCenter, radiusMeters, pointLat, pointLng) => {
  return distanceTwoPoints(circleLatCenter,circleLngCenter,pointLat, pointLng) < radiusMeters;
}

export default circleContains;
