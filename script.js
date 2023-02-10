// task 1

const car = {
   model: 'Ford',
   year: 2020,
   color: 'grey',
   signal: function(){
      alert('fa!fa!');
   },
}
console.log(car.color);
car.color = 'blue';
console.log(car.color);
car.type = 'electric';
console.log(car.type);
car.signal();

// task2

const salaries = {
   frontend: 12000,
   backend: 10000,
   designer: 8000,
   dayPay(){
      alert('we must pay salary on Tuesday!');
   },
   total(){
      let sum = 0;
      for(const key in salaries){
         if(typeof salaries[key] === 'number'){
            sum += salaries[key];
      }
   }
   return sum;
}
};
console.log(salaries.total());
salaries.manager = 7000;
console.log(salaries.total());

// task 3/4

function Computer (brand, system, cost){
   this.brand = brand;
   this.system = system;
   this.cost = cost;
   this[Symbol.toPrimitive] = function (hint){
      switch(hint){
         case 'string':
            return this.brand;
         case 'number':
            return this.cost;
         case 'default':
            return ' ' + this.brand + ' ' + this.system + ' ' + this.cost + ' // ';
      }
   }
}
let dell = new Computer('Dell', 'windows', 800);
console.log(dell.cost);
let apple = new Computer('Apple', 'MacOS', 1700);
console.log(apple.cost);

console.log(String(dell));
console.log(+apple);
console.log(dell+apple);
