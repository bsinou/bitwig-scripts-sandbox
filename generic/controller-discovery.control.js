loadAPI(10);

host.setShouldFailOnDeprecatedUse(true);
host.defineController("Generic", "Controller Discovery", "0.1.1", "2202cafe-babe-babe-cafe-cafe00ff0001", "Bruno SINOU");
host.defineMidiPorts(1, 1);

if (host.platformIsLinux()) {
   println("... Host is Linux") 
   // TODO: Set the correct names of the ports for auto detection on Linux platform here
   // and uncomment this when port names are correct.
   host.addDeviceNameBasedDiscoveryPair(["Input Port 0"], ["Output Port 0"]);
} else {
  host.errorln("Unsupported OS.")
}

function init() {
   println("... Initializing controller discovery script on first channel");

   // transport = host.createTransport();
   host.getMidiInPort(0).setMidiCallback(onMidi0);
   host.getMidiInPort(0).setSysexCallback(onSysex0);

   println("... Done");
}

function onMidi0(status, data1, data2) {
   println("Midi event received:");
   printMidi(status, data1, data2)
}

function onSysex0(data) {   
   println("Sysex0 event received:");
   printSysex(data)


   // // MMC Transport Controls:
   // switch (data) {
   //    case "f07f7f0605f7":
   //       transport.rewind();
   //       break;
   //    case "f07f7f0604f7":
   //       transport.fastForward();
   //       break;
   //    case "f07f7f0601f7":
   //       transport.stop();
   //       break;
   //    case "f07f7f0602f7":
   //       transport.play();
   //       break;
   //    case "f07f7f0606f7":
   //       transport.record();
   //       break;
   // }
}

function flush() {
   println("... Flushing");
}

function exit() {
   println("... About to exit, ciao!");
}
