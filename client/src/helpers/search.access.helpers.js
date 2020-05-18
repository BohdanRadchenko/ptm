export const search = (arr, value) => {
  if (!arr || !value) {
    return null
  }
  return  arr.filter(el => {
    return el.name.toLowerCase().includes(value.toLowerCase())
    || el.email.toLowerCase().includes(value.toLowerCase())
  })
}