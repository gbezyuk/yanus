var chai = require('chai');
var assert = chai.assert;
var Yanus = require('../src/Yanus');

describe('Yanus', function () {
  var defaults = {
    name: 'Bond',
    full_name: 'James Bond',
    code: '007',
    id: 7,
    is_agent: false,
    is_really_agent: true,
    motto: "The World is not enough"
  };

  var signature = ['name', 'full_name', 'code', 'id',
    'is_agent', 'is_really_agent', 'motto'];

  it('should return defaults or empty object with empty or incorrect arguments', function () {
    assert.deepEqual({}, Yanus());
    assert.deepEqual({}, Yanus({}));
    assert.deepEqual(defaults, Yanus(defaults));
    assert.deepEqual({}, Yanus({}, 'wrong'));
    assert.deepEqual({}, Yanus({}, 'wrong', 'params'));
    assert.deepEqual(defaults, Yanus(defaults, 'wrong', 'params'));
  });

  it('should return extend defaults with the arguments provided', function () {
    assert.deepEqual(Yanus(defaults, signature, ['Jack']), {
      name: 'Jack',
      full_name: 'James Bond',
      code: '007',
      id: 7,
      is_agent: false,
      is_really_agent: true,
      motto: "The World is not enough"
    });
    assert.deepEqual(Yanus(defaults, signature, ['John', 'John Snow']), {
      name: 'John',
      full_name: 'John Snow',
      code: '007',
      id: 7,
      is_agent: false,
      is_really_agent: true,
      motto: "The World is not enough"
    });
    assert.deepEqual(Yanus(defaults, signature, [
      {'name': 'Jack'}, 'other', 'args', 'don`t', 'matter']), {
        name: 'Jack',
        full_name: 'James Bond',
        code: '007',
        id: 7,
        is_agent: false,
        is_really_agent: true,
        motto: "The World is not enough"
      }
    );
    assert.deepEqual(Yanus(defaults, signature, [
      {'name': 'John', 'full_name': 'John Snow'}]), {
        name: 'John',
        full_name: 'John Snow',
        code: '007',
        id: 7,
        is_agent: false,
        is_really_agent: true,
        motto: "The World is not enough"
      }
    );

    assert.deepEqual(Yanus(defaults, signature, [
      {name: 'John', full_name: 'John Snow',
        is_really_agent: false, motto: "For the Watch!"}]), {
        name: 'John',
        full_name: 'John Snow',
        code: '007',
        id: 7,
        is_agent: false,
        is_really_agent: false,
        motto: "For the Watch!"
      }
    );
  });
});
