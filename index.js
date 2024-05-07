const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 9000, path: "/peer", allow_discovery: true, proxied: true });