import *as fs from 'fs';
import { faker } from '@faker-js/faker';

function insertData() {
  const data = []

  for (let i=0; i<5; i++) {
    const name = faker.person.firstName()+" clinic";
    const address = faker.location.streetAddress(false)
    const number = faker.phone.imei();
    data.push([name, address, number])
  }

  return data
}

function clinicCreate(){
  const data = insertData();

  const writtenData = data.map(row =>
    row
      .map(String)
      .join(',')
  ).join('\r\n');

  fs.writeFile('../../csv/clinic.csv', writtenData, 'utf8', function (err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log('File saved!');
    }
  });
}

clinicCreate()
