'use strict';
const { sanitize, validate } = require("@strapi/utils");
/**
 * tarjeta controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tarjeta.tarjeta');
