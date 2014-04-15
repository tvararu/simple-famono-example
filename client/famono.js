UI.body.rendered = function() {
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');

  var mainContext = Engine.createContext();

  var containerModifier = new Modifier({
    origin: [0.5, 0.5]
  });

  mainContext = mainContext.add(containerModifier);

  var square = new Surface({
    size: [100, 100],
    content: 'Square!',
    properties: {
      lineHeight: '100px',
      textAlign: 'center'
    }
  });

  mainContext.add(square);
};