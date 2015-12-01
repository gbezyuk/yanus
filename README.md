# Yanus
A tiny tool for both plain list and object function param styles support
[![Build Status](https://travis-ci.org/gbezyuk/yanus.png?branch=master)](https://travis-ci.org/gbezyuk/yanus)

## How to use
```
// NodeJS
var Yanus = require('Yanus');

// in a nutshell
function prepare_agent_legend () {
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

  // here we go
  var params = Yanus(defaults, signature, arguments);

  // now do some stuff on your own
}

// before sending James to Russia
prepare_agent_legend('Ivan', 'Ivan Ivanov');
prepare_agent_legend({name: 'Ivan', full_name: 'Ivan Ivanov'}); // same result

// be specific, they said
prepare_agent_legend({
  name: 'Ivan',
  full_name: 'Ivan Ivanov',
  motto: 'Too much vodka is never enough'
});
```
