/*global describe, it */
'use strict';
(function () {

  describe('ESM.Machine', function () {

    before(function() {
      $('.esm-machine-display').css('visibility', 'visible');
    });

    it('should check display visible', function () {
      assert.equal($('.esm-machine-display').is(':visible'), true);
    });

    it('should check machine locked when trigger button', function () {

      $('.esm-machine-button').click();

      assert.equal($('.esm-machine-display').attr('data-state'), 'IS_RUNNING');

    });

    it('should check machine locked when trigger button show good luck', function () {

      $('.esm-machine-button').click();

      assert.equal($('.esm-machine-display').html(), 'good<br>luck');

    });

  });

})();
