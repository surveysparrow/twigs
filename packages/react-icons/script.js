const fs = require('fs');

fs.readdir('./src/icons/', (err, files) => {
  if (err) {
    return console.log(err);
  }
  console.log(files);
  files.forEach((icon) => {
    fs.readFile(`./src/icons/${icon}`, (err, data) => {
      if (err) {
        return console.error(err);
      }
      const reg = /(?<=\bstrokeWidth=")[^"]*/m;
      console.log(icon);
      const getRegData = reg.exec(data);
      if (getRegData !== null) {
        const defaultStroke = getRegData[0];
        const result = `${data}`.replace('...rest', `strokeWidth = ${defaultStroke}, ...rest`).replaceAll(`strokeWidth="${defaultStroke}"`, 'strokeWidth={strokeWidth}');
        fs.writeFileSync(`./src/icons/${icon}`, result, { encoding: 'utf8', flag: 'w' });
      }

      return data;
    });
  });
});
