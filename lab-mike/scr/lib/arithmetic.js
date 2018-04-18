const arithmetic = module.exports = {};

arithmetic.add = (x, y) => x + y;

arithmetic.sub = (x, y) => x - y;

arithmetic.add(2, 2);
arithmetic.sub(2, 2);

// Mike - I know I'm missing some pieces for there functions 
// but ran out of time.  
// I've included what I think they should look like below.

// arithmetic.add = (x, y) => {
//   if (typeof x || typeof y !== 'number') {
//     return null;
//   }
//   return x + y; 
// };


// arithmetic.sub = (x, y) => {
//   if (typeof x || typeof y !== 'number') {
//     return null;
//   }
//   return x - y; 
// };
