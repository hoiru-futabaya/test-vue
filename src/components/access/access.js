function accessCount () {
  const fs = require('fs')
  var layout = fs.readFileSync('./access.txt', 'utf-8')
  var count = String(Number(layout) + 1)
  fs.writeFileSync('./access.txt', count)
  return count
}
export default { accessCount }
