const tagElements = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
})

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  tagElements.innerHTML = ''

  tags.forEach((tag) => {
    const tagElements = document.createElement('span')
    tagElements.classList.add('tag')
    tagElements.innerText = tag
    tagElements.appendChild(tagElements)
  })
}
