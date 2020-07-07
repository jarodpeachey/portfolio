const fs = require('fs');
const { registerFont, createCanvas } = require('canvas');
const request = require('request');

exports.generateImage = ({ title, path, url }) => {
  const download = (url, imagePath, callback) => {
    request.head(url, (err, res, body) => {
      request(url).pipe(fs.createWriteStream(imagePath)).on('close', callback);
    });
  };

  const imagePath = `./src/images/${path}/featured_image.png`;

  download(url, imagePath, () => {
    console.log('✅ Done!');
  });
  // //define canvas size
  // let width = 1200;
  // let height = 630;

  // //draw canvas
  // const canvas = createCanvas(width, height);
  // const context = canvas.getContext('2d');

  // //Fill the background
  // context.fillStyle = '#68d391';
  // context.fillRect(0, 0, width, height);

  // //readjust width and height
  // width = width - 10;
  // height = height - 10;

  // //fill an inner container to simulate a border
  // context.shadowOffsetX = 0;
  // context.shadowOffsetY = 0;
  // context.shadowBlur = 25;
  // context.shadowColor = 'rgba(0,0,0,0.7)';
  // context.fillStyle = '#000';

  // //set the copy style
  // context.font = 'bold 82pt Ubuntu';
  // context.textAlign = 'left';
  // context.textBaseline = 'top';
  // context.fillStyle = '#fff';

  // //readjust width and height again
  // width = width - 50;
  // height = height - 50;

  // //redraw the title over multiple lines
  // const words = title.split(' ');
  // let line = '';
  // let fromTop = 70;
  // words.forEach((word) => {
  //   let testLine = line + word + ' ';
  //   if (context.measureText(testLine).width > width) {
  //     context.fillText(line.trim(), 60, fromTop);
  //     line = word + ' ';
  //     fromTop = fromTop + 125;
  //   } else {
  //     line = line + word + ' ';
  //   }
  // });
  // context.fillText(line.trim(), 60, fromTop);

  // //insert domain
  // context.fillStyle = '#ccc';
  // context.font = 'bold 24pt Ubuntu';
  // context.fillText('jarodpeachey.netlify.com', 60, 540);

  // //insert handle
  // context.fillStyle = '#ccc';
  // context.font = 'bold 24pt Ubuntu';
  // context.textAlign = 'right';
  // context.fillText('@jarod_peachey', 1140, 540);

  // //export image
  // const buffer = canvas.toBuffer('image/png');
  // const imageLocation = `/images/${path}/seo.png`;
  // fs.writeFileSync(`static${imageLocation}`, buffer);

  // return imageLocation;
};
