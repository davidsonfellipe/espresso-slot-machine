var ESM = ESM || {};

ESM.Util = ESM.Util || {};

ESM.Util.getRandomInt = function(min, max) {
  "use strict";

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
