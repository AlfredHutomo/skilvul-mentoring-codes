console.log("Hello World");

let fruits = ["Mangga"];

// Kode Habil

class IUnit {
  #value = null;
  getValue() {}
}

class Meter extends IUnit {
  #value = null;
  constructor(number) {
    super();
    this.#value = number;
  }

  convert(converterMeter) {
    return converterMeter.convert(this);
  }
  getValue() {
    return this.#value;
  }
}

class Km extends IUnit {
  #value = null;
  constructor(number) {
    super();
    this.#value = number;
  }
  convert(converterKm) {
    return converterKm.convert(this);
  }

  getValue() {
    return this.#value;
  }
}

class IConverter {
  convert() {}
}

class MeterConverter extends IConverter {}

class KmConverter extends IConverter {}

class MeterToKm extends MeterConverter {
  convert(Meter) {
    return new Km(Meter.getValue() * 0.001);
  }
}

class KmToMeter extends KmConverter {
  convert(Km) {
    return new Meter(Km.getValue() * 1000);
  }
}

class Cm extends IUnit {
  #value = null;
  constructor(number) {
    super();
    this.#value = number;
  }

  getValue() {
    return this.#value;
  }

  convert(CmConverter) {
    return CmConverter.convert(this);
  }
}

class CmConverter extends IConverter {}

class CmToMeter extends CmConverter {
  convert(Cm) {
    return new Meter(Cm.getValue() * 0.01);
  }
}

class Kg extends IUnit {
  #value = null;
  constructor(number) {
    super();
    this.#value = number;
  }

  getValue() {
    return this.#value;
  }

  convert(KgConverter) {
    return KgConverter.convert(this);
  }
}

class BMICalculator {
  #weight = null;
  #height = null;
  constructor(weightInKilo, heightInMeter) {
    if (!(heightInMeter instanceof Meter)) throw new Error("Bukan Meter");
    if (!(weightInKg instanceof Kg)) throw new Error("Bukan Kg");

    this.#weight = weightInKilo;
    this.#height = heightInMeter;
  }

  calculate() {
    return this.#weight.getValue() / this.#height.getValue() ** 2;
  }
}

const heightInM = new Meter(1.6);
const weightInKg = new Kg(57);

const heightValue = 1.6;
const heightUnit = "METER";

const weightValue = 57;
const weightUnit = "g";

const LENGTH_UNIT = {
  M: "M",
  CM: "CM",
  KM: "KM",
};

const WEIGHT_UNIT = Object.freeze({
  G: "G",
  KG: "KG",
  TON: "TON",
});

WEIGHT_UNIT.G = 1;

console.log(WEIGHT_UNIT.G);

function extractHeightInMeter(height) {
  switch (height.unit) {
    case LENGTH_UNIT.M:
      return height.data;
    case LENGTH_UNIT.CM:
      return height.data / 100;
    case LENGTH_UNIT.KM:
      return height.data * 1000;
    default:
      console.error("Unit height not valid");
  }
}

function extractWeightInKilo(weight) {
  if (weight.unit === WEIGHT_UNIT.KG) {
    return weight.data;
  } else if (weight.unit === WEIGHT_UNIT.G) {
    return weight.data / 1000;
  } else {
    console.error("Unit weight not valid");
  }
}

function bmiCalculator(height, weight) {
  const heightValue = extractHeightInMeter(height);
  const weightValue = extractWeightInKilo(weight);

  return weightValue / heightValue ** 2;
}

const height = {
  data: 160,
  unit: LENGTH_UNIT.CM, // "CM" or "M" or "KM"
};

const weight = {
  data: 57,
  unit: WEIGHT_UNIT.KG, // "KG" or "G"
};

console.time("BMI Calculator function");
console.log(bmiCalculator(height, weight));
console.timeEnd("BMI Calculator function");

console.time("BMI Calculator class");
const Calculator = new BMICalculator(weightInKg, heightInM);
console.log(Calculator.calculate());
console.timeEnd("BMI Calculator class");

const dataMurid = [
  { nama: "Ipin", nilai: 75 },
  { nama: "Upin", nilai: 100 },
  //...
];

// alternatif
// const nilaiNilaiMurid = dataMurid.map((murid) => murid.nilai);
const nilaiNilaiMurid = dataMurid.map((murid) => {
  return murid.nilai;
});

const nilaiTertinggi = Math.max(...nilaiNilaiMurid);

const muridDenganNilaiTertinggi = dataMurid.filter(
  (murid) => murid.nilai === nilaiTertinggi
);

console.log(muridDenganNilaiTertinggi);

function findHighestScorer() {
  let highestScorer;

  // Iterasi semua dataMurid
  for (let index = 0; index < dataMurid.length; index++) {
    const murid = dataMurid[index];

    // Set highestScorer jika dia kosong
    if (!highestScorer) {
      highestScorer = murid;
    }

    // Cek nilai murid dengan si highestScorer
    if (murid.nilai > highestScorer.nilai) {
      highestScorer = murid;
    }
  }

  return highestScorer;
}

console.log(findHighestScorer());
