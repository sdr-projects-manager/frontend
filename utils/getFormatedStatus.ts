export const getFormatedStatus = (value: 0 | 1) => {
  const result = {
    value,
    color: 'blue',
    name: ''
  }

  if (value === 0) {
    result.color = 'green'
    result.name = 'Open'
  }
  if (value === 1) {
    result.color = 'red'
    result.name = 'Closed'
  }

  return result
}
