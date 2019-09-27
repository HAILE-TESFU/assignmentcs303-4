"use strict";

/**
 * @param  {String} str is
 * @param  {String} maxlength is
 * @returns {String} t
 */
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + "…" : str;
  }

  alert(truncate("haile weldemariam",10));