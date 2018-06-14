'use strict';

var setup = document.querySelector('.setup');

setup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardName = document.querySelector('.setup-user-name');

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
  'rgb(101, 137, 164)'
];

var EYES_COLORS = [
  'red',
  'blue',
  'yellow',
  'green',
  'black'
];

var FIREBALL_COLORS = [
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
  '#ee4830'
];

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var colorIndex = -1;

var changeColor = function (length) {

  colorIndex++;

  if (colorIndex === length) {
    colorIndex = 0;
  }

  return colorIndex;
};

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateName = function () {
  return NAMES[getRandom(0, NAMES.length - 1)] + ' ' + LAST_NAMES[getRandom(0, NAMES.length - 1)];
};

var wizards = [
  {
    name: generateName(),
    coatColor: COAT_COLORS[getRandom(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandom(0, EYES_COLORS.length - 1)]
  },
  {
    name: generateName(),
    coatColor: COAT_COLORS[getRandom(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandom(0, EYES_COLORS.length - 1)]
  },
  {
    name: generateName(),
    coatColor: COAT_COLORS[getRandom(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandom(0, EYES_COLORS.length - 1)]
  },
  {
    name: generateName(),
    coatColor: COAT_COLORS[getRandom(0, COAT_COLORS.length - 1)],
    eyesColor: EYES_COLORS[getRandom(0, EYES_COLORS.length - 1)]
  }
];

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && wizardName !== document.activeElement) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  var coatColor = COAT_COLORS[changeColor(COAT_COLORS.length)];
  wizardCoat.setAttribute('style', 'fill: ' + coatColor);
  setup.querySelector('input[name="coat-color"]').setAttribute('value', coatColor);
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = EYES_COLORS[changeColor(EYES_COLORS.length)];
  wizardEyes.setAttribute('style', 'fill: ' + eyesColor);
  setup.querySelector('input[name="eyes-color"]').setAttribute('value', eyesColor);
});

wizardFireball.addEventListener('click', function () {
  var fireballColor = FIREBALL_COLORS[changeColor(FIREBALL_COLORS.length)];
  wizardFireball.setAttribute('style', 'background-color: ' + fireballColor);
  setup.querySelector('input[name="fireball-color"]').setAttribute('value', fireballColor);
});

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var showWizard = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(createWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

showWizard();
