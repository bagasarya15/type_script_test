"use strict";
function createIntel(processor) {
    console.log(`
        Terimakasih ${processor.brand}, anda berhasil membuat procesor dengan detail sebagai berikut :
        Base model  : ${processor.baseModel},
        Model Name  : ${processor.modelName},
        Clock Speed : ${processor.clockSpeed},
        Turbo Boost Enable? ${processor.turboBoost},
        Total Core  :${processor.coreTotal}
`);
}
function createAMD(processor) {
    console.log(`
        Terimakasih ${processor.brand}, anda berhasil membuat procesor dengan detail sebagai berikut :
        Base Model  : ${processor.baseModel},
        Model Name  : ${processor.modelName},
        Clock Speed : ${processor.clockSpeed},
        PrecisionBoost Enable? ${processor.precisionBoost ? processor.precisionBoost : false},
        Total Core  : ${processor.coreTotal}
`);
}
const CoreI5 = {
    brand: 'Intel',
    baseModel: 'Intel Core I5',
    modelName: 'I5-11350F',
    clockSpeed: 4,
    turboBoost: true,
    coreTotal: 2,
};
const Ryzen1 = {
    brand: 'AMD',
    baseModel: 'Ryzen 1',
    modelName: 'R-1',
    clockSpeed: 4,
    coreTotal: 'Quad Core',
};
const Ryzen3 = {
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
