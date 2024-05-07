const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 443, path: "/peer", allow_discovery: true, proxied: true });