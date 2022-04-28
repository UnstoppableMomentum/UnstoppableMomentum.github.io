const config = {
  // URL_SERVER_HTTPS : "https://127.0.0.1:8080",
  // URL_SERVER_WSS : "wss://127.0.0.1:8080"
  URL_SERVER_HTTPS : "https://localhost:8080",
  URL_SERVER_WSS : "wss://localhost:8080"
};

var pcConfig = {
  "iceServers": [
      // {
      //     url: "stun:192.168.0.106:3478"
      // }
  ]
};

var sdpConstraints = {
  optional: [{
      DtlsSrtpKeyAgreement: true
  }, {
      RtpDataChannels: true
  }]
};

const mediaConstraintsUhd = {
  maxFrameRate: 30,
  audio: true,
  video: {
      height: {
          ideal: 240,
          max: 240,
          min: 100
      },
      width: {
          ideal: 320,
          max: 320,
          min: 160
      }
  }
};

const mediaConstraints = {
  audio: true,
  video: {
      height: {
          ideal: 480,
          max: 480,
          min: 480
      },
      width: {
          ideal: 640,
          max: 640,
          min: 640
      }
  }
};

const bitrateConstraints = {
  minBitrate: 800,
  maxBitrate: 30000,
}
