function access(){
  const fs = require('fs');
  const renderer = require('vue-server-renderer').createRenderer();
  var layout = fs.readFileSync('./access.txt', 'utf-8');
  var count = String(Number(layout) + 1);
  fs.writeFileSync('./access.txt', count);
}
