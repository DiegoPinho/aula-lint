import supertest from 'supertest';
import httpStatus from 'http-status';
import app from '../src/app';

const api = supertest(app);

describe('GET /health', () => {
  it('should return status code 200 and message', async () => {
    const { status, text } = await api.get('/health');
    expect(status).toBe(httpStatus.OK);
    expect(text).toBe("I'm okay!");
  });
});
