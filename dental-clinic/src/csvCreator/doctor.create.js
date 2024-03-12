import *as fs from 'fs';
import { faker } from '@faker-js/faker';

function insertData() {
  const data = []

  for (let i=0; i<400; i++) {
    const name = faker.person.firstName();
    const education = faker.helpers.arrayElement(Object.values({
      LNU: "LNU",
      NULP: "NULP",
      MEDICAL: "Medical"
    }));
    const number = faker.phone.imei();
    const type = faker.helpers.arrayElement(Object.values({
      dentist:"dentist",
      surgeon: "surgeon",
      orthodontist: "orthodontist",
    }));
    data.push([name, education, number, type])
  }

  return data
}

function doctorCreate(){
  const data = insertData();

  const writtenData = data.map(row =>
    row
      .map(String)
      .join(',')
  ).join('\r\n');

  fs.writeFile('../../csv/doctor.csv', writtenData, 'utf8', function (err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log('File saved!');
    }
  });
}

doctorCreate()
