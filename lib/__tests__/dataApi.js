import StateApi from 'state-api';
import { data } from '../testData.json';

let store = null;

beforeEach(() => {
  store = new StateApi(data);
});

describe('DataApi', () => {
  describe('Smoke test', () => {
    it('new instance of DataApi returns an object', () => {
      expect(store).toBeInstanceOf(Object);
    });

    it('have mapIntoObject method', () => {
      expect(store).toHaveProperty('mapIntoObject');
    });
  });

  describe('Unit test', () => {
    it('exposes articles as an Object', async (done) => {
      const articles = store.getState().articles;
      const articleId = data.articles[0].id;
      const articleTitle = data.articles[0].title;

      expect(articles).toHaveProperty(articleId);
      expect(articles[articleId].title).toBe(articleTitle);
      done();
    });

    it('exposes authors as an Object', async (done) => {
      const authors = store.getState().authors;
      const authorId = data.authors[0].id;
      const authorFirstName = data.authors[0].firstName;

      expect(authors).toHaveProperty(authorId);
      expect(authors[authorId].firstName).toBe(authorFirstName);
      done();
    });
  });
});
