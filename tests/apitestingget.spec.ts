import { test, expect } from '@playwright/test';

test('Get the employees data (Tiger Nixon)', async ({ request }) => {

  const apiurl = 'https://dummy.restapiexample.com/api/v1/employees';

  // expected employee data
  const expectedEmployee = {
    id: '1',
    employee_name: 'Tiger Nixon',
    employee_salary: '320800',
    employee_age: '61',
    profile_image: ""
  };

  // api response
  const response = await request.get(apiurl);

  // validate status
  expect(response.status()).toBe(200);

  // parse json response
  const responseData = await response.json();

  console.log('API Response:', JSON.stringify(responseData, null, 2));

  // validate the structure
  expect(responseData).toBeDefined();
  expect(responseData.data).toBeDefined();
  expect(Array.isArray(responseData.data)).toBe(true);

  // find employee id=1
  const tigerNixon = responseData.data.find
  (
    (emp: any) => emp.id.toString() === expectedEmployee.id
  );

  console.log('Tiger Nixon Employee Data Comparison');
  console.log('Expected:', JSON.stringify(expectedEmployee, null, 2));
  console.log('Actual:', JSON.stringify(tigerNixon, null, 2));

  // validations
  expect(tigerNixon).toBeDefined();
  expect(tigerNixon).not.toBeNull();

  expect(tigerNixon.id).toBe(parseInt(expectedEmployee.id));
  expect(tigerNixon.employee_name).toBe(expectedEmployee.employee_name);
  //expect(tigerNixon.employee_salary).toBe(parseInt(expectedEmployee.employee_salary));

  expect(Number(tigerNixon.employee_salary)).toBe(Number(expectedEmployee.employee_salary));
 // expect(tigerNixon.employee_age).toBe(parseInt(expectedEmployee.employee_age));
 expect(Number(tigerNixon.employee_age)).toBe(Number(expectedEmployee.employee_age));

  //expect(tigerNixon.profile_image).toBe(expectedEmployee.profile_image);
  expect(tigerNixon.profile_image ?? '').toBe(expectedEmployee.profile_image);

});