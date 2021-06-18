const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.page.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.page });
  },

  async myController(ctx) {
    // ...

    // https://www.algolia.com/doc/api-reference/api-methods/
    const { client } = strapi.services.algolia
    await client.listIndices()

    // ...
  },
};
