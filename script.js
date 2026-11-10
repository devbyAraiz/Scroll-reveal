const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.85

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      // small stagger delay
      setTimeout(() => {
        box.classList.add('show')
      }, index * 80)
    } else {
      box.classList.remove('show')
    }
  })
}
