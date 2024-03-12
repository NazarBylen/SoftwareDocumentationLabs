import *as fs from 'fs';
import { faker } from '@faker-js/faker';

function insertData() {
  const data = []

  for (let i=0; i<100; i++) {
    const duration = faker.number.int({min: 10, max: 60})
    const price = faker.number.int({min: 10, max: 500})
    const serviceType = faker.helpers.arrayElement(Object.values({
      braces: "braces",
      remove: "remove",
      toothfilling: "toothfilling"
    }));
    const doctorId = faker.number.int({min:1, max:400})
    const clinicId = faker.number.int({min:1, max:5})
    data.push([duration, price, serviceType, doctorId, clinicId])
  }

  return data
}


function serviceCreate(){
  const data = insertData()

  const writtenData = data.map(row =>
    row
      .map(String)
      .join(',')
  ).join('\r\n');

  fs.writeFile('../../csv/service.csv', writtenData, 'utf8', function (err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log('File saved!');
    }
  });
}

serviceCreate()
