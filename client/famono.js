UI.body.rendered = function() {
  var Engine = require('famous/core/Engine');
  
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');
  var Transform = require('famous/core/Transform');
  
  var Transitionable = require("famous/transitions/Transitionable");
  var SnapTransition = require("famous/transitions/SnapTransition");
  var SpringTransition = require("famous/transitions/SpringTransition");
  
  Transitionable.registerMethod('snap', SnapTransition);
  Transitionable.registerMethod('spring', SpringTransition);

  var mainContext = Engine.createContext();

  mainContext.setPerspective(200);

  var containerModifier = new Modifier({
    origin: [0.5, 0.5]
  });

  mainContext = mainContext.add(containerModifier);

  var square = new Surface({
    size: [200, 200],
    properties: {
      lineHeight: '200px',
      textAlign: 'center'
    }
  });
  
  Clicks.find().observe({
    added: function(clickCounter) {
      square.setContent(clickCounter.number);
    },
    
    changed: function(clickCounter) {
      square.setContent(clickCounter.number);
    }
  });

  square.on('click', function() {
    var clickCounter = Clicks.findOne();

    Clicks.update(clickCounter._id, { number: clickCounter.number + 1 });
  });

  mainContext.add(square);
};
