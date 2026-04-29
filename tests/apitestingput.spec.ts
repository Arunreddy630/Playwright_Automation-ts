import { test, expect } from '@playwright/test';

test('PUT Update Employee', async ({ request }) => {

  const employeeId = 1;
  const apiUrl = `https://dummy.restapiexample.com/api/v1/update/${employeeId}`;

  const requestBody =
   {
    name: 'Arun',
    salary: '320800',
    age: '61'
  };

  const response = await request.put(apiUrl, 
    {
    data: requestBody
  });

  console.log('Status:', response.status());

  // Accept 200 (API is inconsistent sometimes)
  expect([200, 201]).toContain(response.status());

  const responseData = await response.json();

  console.log('Response:', JSON.stringify(responseData, null, 2));

  // Basic validation
  expect(responseData).toBeDefined();
  expect(responseData.data).toBeDefined();

  const data = responseData.data;

  // Validate updated values
  expect(data.name).toBe(requestBody.name);

  // Handle string/number mismatch
  expect(Number(data.salary)).toBe(Number(requestBody.salary));
  expect(Number(data.age)).toBe(Number(requestBody.age));

});