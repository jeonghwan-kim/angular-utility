'use strict';

describe('Service: FormUtil', function () {

  // load the service's module
  beforeEach(module('chris.util'));

  // instantiate service
  var FormUtil;
  beforeEach(inject(function (_FormUtil_) {
    FormUtil = _FormUtil_;
  }));

  it('should loaded', function () {
    expect(!!FormUtil).toBeTruty;
  });

  describe('hasError()', function () {
    it('should return true on name required error', function () {
      var form = {
        $submitted: true,
        name: {
          $error: {
            required: true
          }
        }
      };
      expect(FormUtil.hasError(form, 'name', 'required')).toBeTruty;
    });

    it('should return false on not submitted', function () {
      var form = {
        $submitted: false,
        name: {
          $error: {
            required: true
          }
        }
      };
      expect(FormUtil.hasError(form, 'name', 'required')).toBeFalsy;
    });
  });

  describe('removeError()', function () {
    it('should remove \'required\' error of name', function () {
      var form = {
        name: {
          $error: {
            required: true
          }
        }
      };
      FormUtil.removeError(form, 'name', 'required')
      expect(form.name.$error.required).toBeFalsy;
    });

    it('should remove none error of name', function () {
      var form = {
        name: {
          $error: {}
        }
      };
      FormUtil.removeError(form, 'name', 'required')
      expect(form.name.$error.required).toBeFalsy;
    });
  });

  describe('isSubmitable()', function () {
    it('should return true on submitable form', function () {
      var form = {
        $submitted: true,
        $valid: true,
        $error: {}
      };
      expect(FormUtil.isSubmitable(form)).toBeTruty;
    });

    it('should return false on not submitable form', function () {
      var form = {
        $submitted: true,
        $valid: true,
        $error: {
          required: true
        }
      };
      expect(FormUtil.isSubmitable(form)).toBeFalsy;
    });

    it('should return true on not sumitted form', function () {
      var form = {
        $submitted: false,
        $valid: false,
        $error: {
          required: true
        }
      };
      expect(FormUtil.isSubmitable(form)).toBeTruty;
    });
  });
});
