import { test, expect } from '@playwright/test';

test.describe('Employee Create API Tests - POST', () => 
    {

     const apiUrl = 'https://dummy.restapiexample.com/api/v1/create';

     const requestBody = {
     id:'1324',
     name: 'test',
     salary: '123',
     age: '23'
   };

  test('POST Create Employee - validate response', async ({ request }) => {

    const response = await request.post(apiUrl, 
        {
         data: requestBody
        }
    );

    // Accept both 200 and 201
    expect([200, 201]).toContain(response.status());

    const responseData = await response.json();

    // Structure validation
    expect(responseData?.data).toBeDefined();

    const data = responseData.data;

    // validation
    expect(data).toHaveProperty('id');
    expect(data).toHaveProperty('name');
    expect(data).toHaveProperty('salary');
    expect(data).toHaveProperty('age');

    // Flexible value validation (handle string/number)
    expect(data.name).toBe(requestBody.name);
    expect(Number(data.salary)).toBe(Number(requestBody.salary));
    expect(Number(data.age)).toBe(Number(requestBody.age));

    console.log('Created Employee ID:', data.id);
  });

});