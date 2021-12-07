export const generateId = (length = 12) => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
}
