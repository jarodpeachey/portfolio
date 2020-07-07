const fs = require('fs');
const { registerFont, createCanvas } = require('canvas');
const request = require('request');
const mkdirp = require('mkdirp');
const path = require('path');
// import something from '../images';

// FUNCTION TO DOWNLOAD IMAGE TO DIRECTORY
const download = function (uri, filename, callback) {
  request.head(uri, (err, res, body) => {
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

// FUNCTION TO CREATE DIRECTORY
const createDir = (imagePath) => {
  //   fs.mkdir(`/static/images/${imagePath}`, { recursive: true }, (err) => {
  //     if (err) throw err;
  // });
  const made = mkdirp.sync(`static/images/${imagePath}`);
};

/// expand with color, background etc.
const drawTextBG = (ctx, txt, size, x, y, height, textTop, bold) => {
  /// lets save current state as we make a lot of changes
  ctx.save();

  /// set font
  ctx.font = `${bold && 'bold'} ${size}pt Open Sans`;

  /// draw text from top - makes life easier at the moment
  ctx.textBaseline = 'top';

  /// color for background
  ctx.fillStyle = '#00000050';

  /// get width of text
  var width = ctx.measureText(txt).width;

  /// draw background rect assuming height of font
  // ctx.fillRect(x, y, width + 30, 60);
  roundRect(ctx, x, y, width + 30, height, 20, true, false);

  /// text color
  ctx.fillStyle = '#dde0e6';

  /// draw text on top
  ctx.fillText(txt, x + 15, y + textTop);

  /// restore original state
  ctx.restore();
};

function roundRect(
  ctx, //our context
  x, //start x
  y, //start y
  width, //x width
  height, //y height
  radius, //radius of corner rounding
  fill, //background
  stroke, //border
) {
  if (typeof stroke === 'undefined') {
    stroke = true;
  }
  if (typeof radius === 'undefined') {
    radius = 5;
  }
  if (typeof radius === 'number') {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
    for (var side in defaultRadius) {
      radius[side] = radius[side] || defaultRadius[side];
    }
  }

  //draw a line with curved corners around our box
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height,
  );
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();

  //fill it in
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}

exports.generateImage = ({ title, imagePath, url }) => {
  createDir(imagePath);
  download(`${url}`, `static/images/${imagePath}/featured_image.png`, () => {
    console.log('DONE!');
  });

  //define canvas size
  let width = 1200;
  let height = 630;

  //draw canvas
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  //Fill the background
  context.fillStyle = '#e67043';
  // context.fillRect(0, 0, width, height);
  roundRect(context, 0, 0, width, height, 20, true, false);

  //readjust width and height
  width = width - 20;
  height = height - 20;

  //fill an inner container to simulate a border
  context.fillStyle = '#14192b';
  // context.fillRect(5, 5, width, height);
  roundRect(context, 10, 10, width, height, 20, true, false);

  //set the copy style
  context.font = 'bold 42pt "Open Sans"';
  context.textAlign = 'left';
  context.textBaseline = 'top';
  context.fillStyle = '#fff';
  context.fillText('JP', 60, 40);

  //readjust width and height again
  width = width - 50;
  height = height - 50;

  //set the copy style
  context.font = 'bold 68pt Open Sans';
  context.textAlign = 'left';
  context.textBaseline = 'top';
  context.fillStyle = '#fff';

  //readjust width and height again
  width = width - 50;
  height = height - 50;

  //redraw the title over multiple lines
  const words = title.split(' ');
  let line = '';
  let fromTop = 150;
  words.forEach((word) => {
    let testLine = line + word + ' ';
    if (context.measureText(testLine).width > width) {
      // context.fillText(line.trim(), 60, fromTop);
      drawTextBG(context, line.trim(), 68, 60, fromTop, 117, 0, true);
      line = word + ' ';
      fromTop = fromTop + 125;
    } else {
      line = line + word + ' ';
    }
  });

  drawTextBG(context, line.trim(), 68, 60, fromTop, 117, 0, true);
  drawTextBG(context, 'jarodpeachey.netlify.com', 22, 60, 510, 60, 10, false);

  // context.fillStyle = '#ccc';
  // context.font = 'bold 24pt Open Sans';
  // context.fillText('jarodpeachey.netlify.com', 60, 540);

  // context.fillStyle = '#ccc';
  // context.font = 'bold 24pt Open Sans';
  // context.textAlign = 'right';
  // context.fillText('@jarod_peachey', 1140, 540);

  const buffer = canvas.toBuffer('image/png');
  const imageLocation = `/images/${imagePath}/seo.png`;
  fs.writeFileSync(`static${imageLocation}`, buffer);

  return imageLocation;
};
