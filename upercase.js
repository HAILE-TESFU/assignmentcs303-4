"use strict";

/**
 * @param  {String} str is
 * @returns {String} total
 */
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") );


  describe("isMax", function () {

    it("firstTrial", function () {
        // eslint-disable-next-line no-undef
        assert.equal(chechSpan("hi viagra hg"), true);
    });

    it("seconTriall", function () {
        // eslint-disable-next-line no-undef
        assert.equal(chechSpan("hi haile"), false);
    });
    it("thirdTrial", function () {
        // eslint-disable-next-line no-undef
        assert.equal(chechSpan("xxx"), true);
    });
    
});