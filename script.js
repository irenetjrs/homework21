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