const { createCanvas } = require('canvas');
const fs = require('fs');

function makeIcon(size, path) {
  const c = createCanvas(size, size);
  const ctx = c.getContext('2d');
  // Background
  ctx.fillStyle = '#080b14';
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, size * 0.2);
  ctx.fill();
  // Gradient circle
  const grad = ctx.createLinearGradient(size*0.2, size*0.2, size*0.8, size*0.8);
  grad.addColorStop(0, '#4f8eff');
  grad.addColorStop(1, '#bf7fff');
  ctx.fillStyle = grad;
  ctx.font = `bold ${size*0.55}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('⚡', size/2, size/2);
  fs.writeFileSync(path, c.toBuffer('image/png'));
  console.log('Created:', path);
}
try {
  makeIcon(192, 'C:/Users/2003s/Documents/life-dashboard/icon-192.png');
  makeIcon(512, 'C:/Users/2003s/Documents/life-dashboard/icon-512.png');
} catch(e) {
  console.log('canvas not available:', e.message);
}