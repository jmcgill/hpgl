const SerialPort = require("serialport");
const hpgl = require('./hpgl.js');
var transport = new SerialPort("/dev/tty.usbserial-AK070I5T", {autoOpen: false});

var plotter = new hpgl.Plotter();
// Connect the device and add a callback to draw some text.
plotter
.on("ready", function() {
    console.log('Capturing to file');
    this.startCapturingToFile("test.hpgl");
  })
  .on("error", function (err) {
    console.log(err);
  })
.connect(transport, {
  paper: "A4",
  // orientation: "landscape",
  // penThickness: 0.3
}, function(error) {
  console.log('Connected');
  console.log('Plotter initialized');
  if (error) {
    console.log(error);
    return;
  }

  this
    .selectPen(4)
    //.moveTo(6, 6)
    //.drawRectangle(1, 1)

  //this.penDown();
  this.stopCapturingToFile();
});
