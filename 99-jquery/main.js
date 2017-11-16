const $ = selektor => document.querySelector(selektor)

EventTarget.prototype.on = EventTarget.prototype.addEventListener

const print = console.log

$('#pasus').on('click', function() {
    print('klik')
})
