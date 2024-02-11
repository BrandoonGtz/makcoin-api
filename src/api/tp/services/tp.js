'use strict';

/**
 * tp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tp.tp');
