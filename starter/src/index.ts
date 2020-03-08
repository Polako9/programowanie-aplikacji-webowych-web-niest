
let Liczba01: number = +(<HTMLInputElement> document.getElementById("Liczba01")).value;
let Liczba02: number = +(<HTMLInputElement>document.getElementById("Liczba02")).value;
let Liczba03: number = +(<HTMLInputElement>document.getElementById("Liczba03")).value;
let Liczba04: number = +(<HTMLInputElement>document.getElementById("Liczba04")).value;

let Suma = Liczba01 + Liczba02 + Liczba03 + Liczba04;
console.log(Suma);
let Średnia = (Liczba01 + Liczba02 + Liczba03 + Liczba04)/4;
console.log(Średnia);
let Max = Math.max(Liczba01, Liczba02, Liczba03, Liczba04);
console.log(Max);
let Min = Math.min(Liczba01, Liczba02, Liczba04, Liczba04);
console.log(Min);