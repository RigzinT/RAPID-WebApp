// app.test.js
import request from 'supertest';
import app from './myApp'; // Import the app from myApp.js

describe('Addition API Test Case', () => {
    it('should add two numbers correctly (integers)', async () => {
        const response = await request(app).get('/add?num1=5&num2=10');
        expect(response.status).toBe(200);

        // Log the full response text to see what we're working with
        console.log(response.text);

        // Use a regular expression that accounts for HTML tags and extracts the numbers
        const resultMatch = response.text.match(/The result of adding\s*(\d+)\s*and\s*(\d+)\s*is\s*(\d+)/);

        // Ensure the match was successful
        expect(resultMatch).toBeTruthy();

        // Extract and check the matched numbers
        expect(resultMatch[1]).toBe('5'); // num1
        expect(resultMatch[2]).toBe('10'); // num2
        expect(resultMatch[3]).toBe('15'); // result
    });
});
