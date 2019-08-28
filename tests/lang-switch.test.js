import langSwitch from '../switcher'

test('ghbdtn => привет', () => {
  expect(langSwitch('ghbdtn')).toBe('привет')
})

test('Ghbdtn => Привет', () => {
  expect(langSwitch('Ghbdtn')).toBe('Привет')
})
