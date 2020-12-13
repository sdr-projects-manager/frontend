export const getTagColor = (state: 'open' | 'close') => {
  if (state === 'open') return 'green'
  if (state === 'close') return 'red'
  return 'blue'
}
