export const getPriorityColor = (state: 'low' | 'medium' | 'high') => {
  if (state === 'low') return 'green'
  if (state === 'medium') return 'orange'
  if (state === 'high') return 'red'
  return 'blue'
}
