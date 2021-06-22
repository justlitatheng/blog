// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import '../src/bootstrapModules.js'

require("../stylesheets/application")
require.context('../images', true)

require("trix")
require("@rails/actiontext")
import '../src/popover.js'

document.addEventListener('turbolinks:load', () => {
    document.addEventListener('click', () => {
        let element = event.target.closest('.paragraph-content')
        if (!element) return;

        element.classList.add('d-none')
        element.nextElementSibling.classList.remove('d-none')
    })

    document.addEventListener('click', () => {
        if (!event.target.matches('.cancel')) return;

        let element = event.target.closest('.paragraph-form')

        element.classList.add('d-none')
        element.previousElementSibling.classList.remove('d-none')
    })
})
import "controllers"
