var h = require('react-hyperscript');

var a = h(
  Foo,
  null,
  [
    h('div', { foo: 'bar' }),
    h(
        'div',
        null,
        [h('span', null, 'bleh')]
    )
    ]
);
