/**
 * Determina si un punto se encuentra dentro de un poligono o no
 * @param {Array} polygon 
 * @param {Array} point 
 * @returns 
 */
const polygonContains = (polygon, point) => {
  const n = polygon.length;
  const x = point[0], y = point[1];
  let p = polygon[n - 1];
  let x0 = p[0], y0 = p[1];
  let x1;
  let y1;
      inside = false;

  for (let i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
    x0 = x1, y0 = y1;
  }

  return inside;
}

export default polygonContains;
