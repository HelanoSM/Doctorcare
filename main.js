//const navigation = document.getElementById('navigation')

window.addEventListener('scroll', onScroll)

function onScroll() {
  openMenuOnScroll()
  showBackToTopButton()
  activeMenuSlashAtCurrentLocation(home)
  activeMenuSlashAtCurrentLocation(services)
  activeMenuSlashAtCurrentLocation(about)
  activeMenuSlashAtCurrentLocation(contact)
}

function activeMenuSlashAtCurrentLocation(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2

  //topo da seção
  const sectionTop = section.offsetTop

  //altura da seção
  const sectionHeight = section.offsetHeight

  //o topo da seção chegou/ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base passou da linha alvo
  const sectionEndAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  //fronteiras section

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function openMenuOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({ origin: 'top', distance: '30px', duration: 700 }).reveal(
  `#home, 
  #home img, 
  #home .stats, 
  #services, 
  #services header, 
  #services card,
  #about,
  #about header,
  #about .content`
)
