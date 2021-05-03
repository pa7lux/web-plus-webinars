const btn = document.querySelector('.accordition__button');
const icon = document.querySelector('.accordition__icon');
const panel = document.querySelector('.accordition__panel');

let opened = false;

btn.onclick = function() {
  if(opened) {
    icon.classList.remove('accordition__icon_rotated');
    panel.classList.remove('accordition__panel_opened');
  } else {
    icon.classList.add('accordition__icon_rotated');
    panel.classList.add('accordition__panel_opened');
  }
  opened = !opened;
}