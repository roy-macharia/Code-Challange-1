function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${distanceFare}
Total: KES ${totalFare}

Panda Pikipiki!`);
}

const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
calculateBodaFare(Number(input));