import *as fs from 'fs';
import { faker } from '@faker-js/faker';

function insertData() {
  const data = []

  for (let i=0; i<600; i++) {
    const name = faker.person.firstName();
    const age = faker.number.int({ min: 18, max: 80 });
    const number = faker.phone.imei();
    data.push([name, age, number])
  }

  return data
}

function customerCreate(){
  const data = insertData();

  const writtenData = data.map(row =>
    row
      .map(String)
      .join(',')
  ).join('\r\n');

  fs.writeFile('../../csv/customer.csv', writtenData, 'utf8', function (err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log('File saved!');
    }
  });
}

customerCreate()
