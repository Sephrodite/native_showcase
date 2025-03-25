export function isWithinRadius(
    userLat: number,
    userLng: number,
    targetLat: number,
    targetLng: number,
    radiusMeters: number
  ): boolean {
    const toRad = (value: number) => (value * Math.PI) / 180;
  
    const R = 6371e3; // Earth radius in meters
    const φ1 = toRad(userLat);
    const φ2 = toRad(targetLat);
    const Δφ = toRad(targetLat - userLat);
    const Δλ = toRad(targetLng - userLng);
  
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
  
    return distance <= radiusMeters;
  }