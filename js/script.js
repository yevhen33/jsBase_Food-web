'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          cards = require('./modules/cards'),
          modal = require('./modules/modal'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider'),
          calc = require('./modules/calc'),
          timer = require('./modules/timer');

    tabs();
    cards();
    modal();
    forms();
    slider();
    calc();
    timer();
    
});
