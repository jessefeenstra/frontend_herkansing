var body = document.querySelector('body')
var btnFilterOpen = document.querySelector('header button')
var btnFilterClose = document.querySelector('form button')

btnFilterOpen.addEventListener('click', openFilter)
btnFilterClose.addEventListener('click', closeFilter)

function openFilter() {
  body.classList.add('filter')
}

function closeFilter(e) {
  e.preventDefault()
  body.classList.remove('filter')
}