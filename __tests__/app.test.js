const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('Zodiac routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('zodiacs list test', async () => {
    const resp = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return {
        id: zodiac.id,
        name: zodiac.name,
      };
    });
    expect(resp.body).toEqual(expected);
  });

  it('1 zodiac test', async () => {
    const resp = await request(app).get('/zodiacs/2');
    const test2 = {
      id: '2',
      name: 'aries',
      dates: 'Mar 21 - Apr 19',
      symbol: 'Ram',
    };
    expect(resp.body).toEqual(test2);
  });

  afterAll(() => {
    pool.end();
  });
});
