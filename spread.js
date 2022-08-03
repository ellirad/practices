let myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  let updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  let myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  myVehicle.brand = 'Pride';

  console.log(myUpdatedVehicle);

