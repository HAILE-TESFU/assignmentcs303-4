"use strict";
/**
 * @param  {String} str is
 * @returns {String} t
 */
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
  }
  
  alert( checkSpam("buy ViAgRA now") );
  alert( checkSpam("free xxxxx") );
  alert( checkSpam("innocent rabbit") );




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