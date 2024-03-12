import *as fs from 'fs';
import { faker } from '@faker-js/faker';

function insertData() {
  const data = []

  for (let i=0; i<100; i++) {
    const date = faker.date.weekday()
    const amount = faker.number.int({min: 10, max: 500})
    const paymentType = faker.helpers.arrayElement(Object.values({
      cash: "cash",
      card: "card",
    }));
    const customerId = faker.number.int({min:1, max:600})
    const clinicId = faker.number.int({min:1, max:5})
    data.push([date, amount, paymentType, customerId, clinicId])
  }

  return data
}


function paymentCreate(){
  const data = insertData()

  const writtenData = data.map(row =>
    row
      .map(String)
      .join(',')
  ).join('\r\n');

  fs.writeFile('../../csv/payment.csv', writtenData, 'utf8', function (err) {
    if (err) {
      console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
      console.log('File saved!');
    }
  });
}

paymentCreate()
