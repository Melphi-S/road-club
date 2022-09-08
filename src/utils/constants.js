const sliderButtons = {
    nextButton: document.querySelector(".surfaces__button_type_next"),
    prevButton: document.querySelector(".surfaces__button_type_previous"),
    highwayButton: document.querySelector("#button-highway"),
    gravelButton: document.querySelector("#button-gravel"),
    ttButton: document.querySelector("#button-tt"),
    selectBikes: document.querySelector('.bikes__select')
}

const surfaceButtons = [sliderButtons.highwayButton, sliderButtons.gravelButton, sliderButtons.ttButton];
const themeToggleButtons = Array.from(document.querySelectorAll('.theme-toggle__button'));

const form = document.querySelector('.footer__email-form');
const currentValidationObject = {
  inputSelector: '.footer__email-input',
  submitButtonSelector: '.footer__email-button',
  inactiveButtonClass: 'footer__email-button_inactive'
}

const body = document.querySelector('.body');
const subtitles = Array.from(document.querySelectorAll('.section__subtitle'));
const quoteAuthor = document.querySelector('.intro__author-profession');
const arrowButtons = Array.from(document.querySelectorAll('.surfaces__button'));
const bikesButtons = Array.from(document.querySelectorAll('.bikes__button'));
const copyright = document.querySelector('.footer__copyright');
const themeLogos = Array.from(document.querySelectorAll('.theme-toggle__logo'));
const themeButtonLabels = Array.from(document.querySelectorAll('.theme-toggle__button-label'));
const emailInput = document.querySelector('.footer__email-input');
const links = Array.from(document.querySelectorAll('.link'));
const sections = Array.from(document.querySelectorAll('.section'));
const options = Array.from(document.querySelectorAll('.bikes__option'));
const lineElements = Array.from(document.querySelectorAll('.burger-button__line-element'))

const currentThemeElements = new Map ([
  [body, 'body_theme'],
  [quoteAuthor, 'intro__author-profession_theme'],
  [subtitles, 'section__subtitle_theme'],
  [arrowButtons, 'surfaces__button_theme'],
  [bikesButtons, 'bikes__button_theme'],
  [copyright, 'footer__copyright_theme'],
  [themeLogos, 'theme-toggle__logo_theme'],
  [themeButtonLabels, 'theme-toggle__button-label_theme'],
  [emailInput, 'footer__email-input_theme'],
  [links, 'link_theme'],
  [sections, 'section_theme'],
  [options, 'bikes__option_theme'],
  [lineElements, 'burger-button__line-element_theme']
])

const mobileWidth = 480;
const tabletWidth = 768;

const headerBurgerOptions = {
  burgerSelector: '.burger-menu',
  burgerActiveClass: 'burger-menu_active',
  burgerButtonSelector: '.burger-button',
  burgerButtonElementSelector: '.burger-button__line-element',
  burgerButtonActiveElementClass: 'burger-button__line-element_active',
  clickableClasses: ['link'],
  maxValidWidth: mobileWidth
}

const burgerButton = document.querySelector('.burger-button');

export {sliderButtons, surfaceButtons, tabletWidth, form, currentValidationObject, currentThemeElements, themeToggleButtons, headerBurgerOptions, burgerButton}