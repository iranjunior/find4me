/**
 * @typedef {Object} Response
 * @property {number} status - Request status
 * @property {bool} success - Success
 * @property {bool} error - Error
 * @property {Keywords} data - Responses
 *
 * @typedef {Object} Keywords
 * @property {string[]} keyword - Keywords
 *
 *
 * @param {string} key
 *
 * @returns {Response}
 */
async function getKeywords(key) {
  try {
    const response = await this.get('/keywords', {
      params: {
        keyword: key,
      },
    });

    if (response.status === 200) {
      return {
        status: response.status,
        success: true,
        error: false,
        data: response.data,
      };
    }
    return {
      status: response.status,
      success: false,
      error: true,
      data: response.data || response.error,
    };
  } catch (error) {
    return {
      status: 500,
      success: false,
      error: true,
      data: error,
    };
  }
}

export default getKeywords;
