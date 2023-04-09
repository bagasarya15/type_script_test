// Function

// function create(): void {
//   let a = 1;
//   let b = 2;
//   let z = a + b;

//   console.log('Hahaha ' + z);
// }
// create();

function add(x: number, y: number): string {
  return `${x} + ${y} hasilnya = ${x + y}`;
}
const result = add(10, 30);
console.log(result);

//Arrow Function
const create2 = (): string => {
  return 'Hello World';
};
// const result = create2();
// console.log({ result });
