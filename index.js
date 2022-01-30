const neymarMass = 68;
const neymarHeight = 1.75;


const mbappeMass = 73;
const mpappeHeight = 1.78;


const neymarBMI = Math.floor((neymarMass/ (neymarHeight * neymarHeight)));
const mbappeBMI = Math.floor((mbappeMass/ ( mpappeHeight * mpappeHeight)));

const analyse = neymarBMI > mbappeBMI;

console.log("Neymar's BMI is " + neymarBMI)
console.log("Mbappe's BMI is " + mbappeBMI)

console.log("Is Neymar's BMI higher than Mpappe's? " +"\n" + analyse)