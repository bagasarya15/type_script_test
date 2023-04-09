type CoreCount = 2 | 4 | 8 | 12;
type CoreName = 'Dual Core' | 'Quad Core' | 'OctaCore';
type Core = CoreCount | CoreName;

interface IProsesor {
  brand: string;
  baseModel: string;
  modelName: string;
  clockSpeed: number;
  coreTotal: Core;
}

interface Intel extends IProsesor {
  turboBoost: boolean;
}

interface AMD extends IProsesor {
  precisionBoost?: boolean;
}

function createIntel(processor: Intel): void {
  console.log(`
        Terimakasih ${processor.brand}, anda berhasil membuat procesor dengan detail sebagai berikut :
        Base model  : ${processor.baseModel},
        Model Name  : ${processor.modelName},
        Clock Speed : ${processor.clockSpeed},
        Turbo Boost Enable? ${processor.turboBoost},
        Total Core  :${processor.coreTotal}
`);
}

function createAMD(processor: AMD): void {
  console.log(`
        Terimakasih ${processor.brand}, anda berhasil membuat procesor dengan detail sebagai berikut :
        Base Model  : ${processor.baseModel},
        Model Name  : ${processor.modelName},
        Clock Speed : ${processor.clockSpeed},
        PrecisionBoost Enable? ${processor.precisionBoost ? processor.precisionBoost : false},
        Total Core  : ${processor.coreTotal}
`);
}

const CoreI5: Intel = {
  brand: 'Intel',
  baseModel: 'Intel Core I5',
  modelName: 'I5-11350F',
  clockSpeed: 4,
  turboBoost: true,
  coreTotal: 2,
};

const Ryzen1: AMD = {
  brand: 'AMD',
  baseModel: 'Ryzen 1',
  modelName: 'R-1',
  clockSpeed: 4,
  coreTotal: 'Quad Core',
};
const Ryzen3: AMD = {
  brand: 'AMD',
  baseModel: 'Ryzen 3',
  modelName: 'R-5570X',
  clockSpeed: 6,
  precisionBoost: true,
  coreTotal: 'Quad Core',
};

createIntel(CoreI5);
createAMD(Ryzen1);
createAMD(Ryzen3);
