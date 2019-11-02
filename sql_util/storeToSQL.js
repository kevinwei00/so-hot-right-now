const fs = require('fs');
const store = require('./store_SQLReady');

let toolData = ``;
for (let category_id in store) {
  const tools = store[category_id].list;
  for (let tool_id in tools) {
    const keywordsArr = tools[tool_id].keywords;
    toolData += `
    ('${tool_id}', '${tools[tool_id].name}', '{${keywordsArr.map((keyword) => {
      return `"${keyword}"`;
    })}}', '${tools[tool_id].website}', '${tool_id}'),`; // except for vuex
  }
}

fs.writeFile('./sql_util/toolData.txt', toolData, (err) => {
  if (err) {
    throw err;
  }
  console.log('Tool Data - Success!');
});

let joinData = ``;
for (let category_id in store) {
  const tools = store[category_id].list;
  for (let tool_id in tools) {
    joinData += `
    ('${category_id}', '${tool_id}'),`;
  }
}

fs.writeFile('./sql_util/joinData.txt', joinData, (err) => {
  if (err) {
    throw err;
  }
  console.log('Join Data - Success!');
});
