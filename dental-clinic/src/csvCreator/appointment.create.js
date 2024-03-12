import *as fs from 'fs';
import { faker } from '@faker-js/faker';

function insertData() {
  const data = []

  for (let i=0; i<100; i++) {
    const date = faker.date.weekday()
    const customerId = faker.number.int({min:1, max:600})
    const doctorId = faker.number.int({min:1, max:400})
    data.push([date, customerId, doctorId])
  }

  return data
}

function appointmentCreate(){
  const data = insertData();

  const writtenData = data.map(row =>
    row
      .map(String)
      .join(',')
  ).join('\r\n');

  fs.writeFile('../../csv/appointment.csv', writtenData, 'utf8', function (err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log('File saved!');
    }
  });
}

appointmentCreate()
