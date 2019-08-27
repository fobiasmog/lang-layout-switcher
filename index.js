import ru from './langs/ru.json'

export default function langSwitch (value) {
  if (typeof value !== 'string') return value
  return value.split('').map(letter => ru[letter] || letter).join('')
}
