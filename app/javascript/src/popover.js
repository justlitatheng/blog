import { Popover } from 'bootstrap'

document.addEventListener('turbolinks:load', () => {
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
  return new Popover(popoverTriggerEl)
  })
})
