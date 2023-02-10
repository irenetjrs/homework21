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