class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }

  async getArticles() {
    return this.mapIntoObject(await this.rawData.articles);
  }

  async getAuthors() {
    return this.mapIntoObject(await this.rawData.authors);
  }
}

export default DataApi;
