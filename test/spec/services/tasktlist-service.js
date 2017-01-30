'use strict';

describe('Service: TasktListService', function () {

  // load the service's module
  beforeEach(module('desktopApp'));

  // instantiate service
  var TasktListService;
  beforeEach(inject(function (_TasktListService_) {
    TasktListService = _TasktListService_;
  }));

  it('should do something', function () {
    expect(!!TasktListService).toBe(true);
  });

});
