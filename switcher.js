import ru from './langs/ru.json'

function mapLetter (letter) {
  let mappedLetter = ru[letter.toLowerCase()] || letter
  if (letter.search(/[A-Z]/) === 0) mappedLetter = mappedLetter.toUpperCase()

  return mappedLetter
}

export default function langSwitch (value) {
  if (typeof value !== 'string') return value
  return value
    .split('')
    .map(mapLetter)
    .join('')
}
