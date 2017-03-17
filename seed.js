var MetadataHandler = require('cc-metadata-handler')

var properties = {
  tracker: {               // Tracker settings
    udp: Boolean,           // Using udp for torrent trafic or not
    http: Boolean,          // Using http for torrent trafic or not
    ws: Boolean,            // Using websockets for torrent trafic or not
    hostname: String,       // Our machince host name
    port: Number            // Port to listen as tracker
  },
  client: {
    torrentPort: Number,
    dhtPort: Number,
  // Enable DHT (default=true), or options object for DHT
    // dht: true,
  // Max number of peers to connect to per torrent (default=100)
    maxPeers: Number,
  // DHT protocol node ID (default=randomly generated)
    // nodeId: String|Buffer,
  // Wire protocol peer ID (default=randomly generated)
    // peerId: '01234567890123456789',
  // RTCPeerConnection configuration object (default=STUN only)
    // rtcConfig: Object,,
  // custom storage engine, or `false` to use in-memory engine
    // storage: Function,
  // custom webrtc implementation (in node, specify the [wrtc](https://www.npmjs.com/package/wrtc) package)
    // wrtc: {},
  // List of additional trackers to use (added to list in .torrent or magnet uri)
    // announce: [],
  // List of web seed urls (see [bep19](http://www.bittorrent.org/beps/bep_0019.html))
    // urlList: []
  // Whether or not to enable trackers (default=true)
    tracker: false
  },
  folders: { // Folder structure settings
    torrents: './torrents',  // Path to save torrent files to, if left empty, all the torrent references will be saved in memory and will be lost on restart
    data: './data',          // Main path to where all the data is stored
    capSize: '80%',          // Number of MB or percent in the form of 12%
    retryTime: 10000,
    autoWatchInterval: 60000,
    ignores: []
  }
}

var handler = new MetadataHandler(properties)

var metadata = {
  assetId:'LDJMbzwCBWhrrXpKS7TrCfoAWYgXQhwZg1G6R',
  assetName: "Time Machine",
  issuer: "Dr. Emmet Brown",
  description: "The flux capacitor will send us back to the future",
  urls: [
    {
      name: "imdb",
      url: "http://www.imdb.com/title/tt0088763/",
      mimeType: "text/html",
      dataHash: "249e3e3c77d07d8fe8984a47bbbab8c89aeb8b1dadf4e2ff47db42a3e5a1c126"
    }
  ],
  encryptions: [
    {
      key: "Undelrying Physics",
      pubKey: "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA0hw6PRO9RpHRf/pdpEMfD01odzBTaheuA1JxunVTq+/X1hGSUrpRWMIM/tp8\n9DQod6K+6Bo/2CmoZxkWPOk45tbU9QE4Cb532n+MIkzsmbvmM+i49UXSqC8v44MGKTVLb7X2\nPogItSM3lqH4KpZR3cM/JDarfS1R77U/OMDZ/YECDPbcwKPdSLQHhWJ1c9cX5+0lCSDt1WXY\n4XX+hH64C+L/Ss4dMP2kpyHvbsBYpGdLu7AmcDmHtCOl2rXR1z4E0asYGiojw3PI56ATOndS\n30ABKKgQTAExjPQ24BtJYhfJ+zD5zHhztizPPfOwrID2HTfGwVTwfXinV4bpoFfwhwIDAQAB\n-----END RSA PUBLIC KEY-----\n",
      format: "pem",
      type: "pkcs1"
    }
  ],
  verifications: {
    social:{
      twitter:{
        username: 'my_username'
      },
      facebook:{
        page_id: '1232952150'
      },
      github:{
        gist_id: '6c704f5759927212e714'
      }
    },
    domain:{
      url:"https://www.example.com/digital_assets/assets.txt"
    },
    signed:{
  },
  userData :{
    meta: [
      {key: 'Weight', value: 50000,      type: 'Number'},
      {key: 'Model',  value: "Delorean", type: 'String'},
    ],
    technology: 'flux capacitor 666',
    "Undelrying Physics": 'This magnetic flux calculator calculates the magnetic flux of an object based on the magnitude of the magnetic field which the object emanates and the area of the object, according to the formula, Φ=BA, if the magnetic field is at a 90° angle (perpendicular) to the area of the object. If the magnetic field is not perpendicular to the object, then use the calculator below, which computes the magnetic flux at non-perpendicular angles. The magnetic flux is directly proportional to the magnitude of the magnetic field emanating from the object and the area of the object. The greater the magnetic field, the greater the magnetic flux. Conversely, the smaller the magnetic field, the smaller the flux. The area of the object has the same direct relationship. The greater the area of an object, the greater the flux. Conversely, the smaller the area, the smaller the magnetic flux.'
  }
}
}


    var toto = function (){handler.addMetadata(metadata, function (err, result) {
      if (err) throw err
      handler.on('uploads/' + result.torrentHash.toString('hex'), function (torrent) {
         console.log('uploads: ', torrent)
      })
      handler.shareMetadata(result.torrentHash.toString('hex'), function (err, torrent) {
        if (err) throw err
         console.log('shareMetadata: ', torrent)

      })
       console.log(result)
    }) }

var test = toto()
