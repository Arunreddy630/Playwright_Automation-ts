import { test, expect } from '@playwright/test';

test('DELETE Employee by ID', async ({ request }) => {

  const employeeId = 2;
  const apiUrl = `https://dummy.restapiexample.com/api/v1/delete/${employeeId}`;

  const response = await request.delete(apiUrl);

  console.log('Status:', response.status());

  expect(response.status()).toBe(200);

  const responseData = await response.json();

  console.log('Response:', JSON.stringify(responseData, null, 2));

  // Validate structure
  expect(responseData).toBeDefined();
  expect(responseData.status).toBeDefined();
  expect(responseData.message).toBeDefined();

  // Validate success message
  expect(responseData.status).toBe('success');
  expect(responseData.message.toLowerCase()).toContain('successfully');
});