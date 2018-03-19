import DataApi from '../DataApi';
import { data } from '../testData.json';

let api = null;

beforeEach(() => {
  api = new DataApi(data);
});

describe('DataApi', () => {
  describe('Smoke test', () => {
    it('new instance of DataApi returns an object', () => {
      expect(api).toBeInstanceOf(Object);
    });

    it('have mapIntoObject method', () => {
      expect(api).toHaveProperty('mapIntoObject');
    });
  });

  describe('Unit test', () => {
    it('expect to have mapIntoObject called', async () => {
      spyOn(api, 'mapIntoObject');
      await api.getArticles();
      await api.getAuthors();
      expect(await api.mapIntoObject).toHaveBeenCalledTimes(2);
    });

    it('exposes articles as an Object', async (done) => {
      const articles = await api.getArticles();
      const articleId = data.articles[0].id;
      const articleTitle = data.articles[0].title;

      expect(articles).toHaveProperty(articleId);
      expect(articles[articleId].title).toBe(articleTitle);
      done();
    });

    it('exposes authors as an Object', async (done) => {
      const authors = await api.getAuthors();
      const authorId = data.authors[0].id;
      const authorFirstName = data.authors[0].firstName;

      expect(authors).toHaveProperty(authorId);
      expect(authors[authorId].firstName).toBe(authorFirstName);
      done();
    });
  });
});
