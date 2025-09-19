/**
 * iscrizioni controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::iscrizioni.iscrizioni', ({ strapi }) => ({
  async find(ctx) {
    // Forza il limite a 130 se non specificato
    if (!ctx.query.pagination) {
      ctx.query.pagination = {};
    }
    const pagination = ctx.query.pagination as any;
    if (!pagination.limit) {
      pagination.limit = 130;
    }
    if (pagination.limit > 130) {
      pagination.limit = 130;
    }
    
    return await super.find(ctx);
  }
}));
