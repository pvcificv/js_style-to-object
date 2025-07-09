'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};
  const pars = sourceString.split(';');

  for (let line of pars) {
    line = line.trim();

    if (!line.includes(':')) {
      continue;
    }

    const [key, value] = line.split(':');
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    res[trimmedKey] = trimmedValue;
  }

  return res;
}

module.exports = convertToObject;
