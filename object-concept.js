/* 111111111111111111111111111111111111111111111111111111111111111111111111 */
// simple javaScript object declare
// object
const man = {
     name: 'asif',
     old : 23,
     class: 'web developer'
};
// console.log(man);

/* 222222222222222222222222222222222222222222222222222222222222222222222222 */
/* Using Object Literal */
const mane = {
     name: 'saki',
     old: 23,
};
// const mans = new Object();
// console.log(mans);
/* 
const mans = new Object(man);// same variable e declare kore ; */



/*333333333333333333333333333333333333333333333333333333333333333333333333333 */

/*syntactical Sugar Object */

class People {
     constructor(name, age) {
          this.name = name;
          this.age = age;
     }
}
/* 
const result = ('asif', 45);
console.log(result); */

const result = new People("Manus", 12);
console.log(result);