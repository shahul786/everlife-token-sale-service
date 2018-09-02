const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports.verifySignature = (idmResponse) => {
    var idmPublicKey = fs.readFileSync(path.resolve(__dirname , config.idm.idmPubKeyFile));
    const decoded = jwt.verify(idmResponse, idmPublicKey); // Throws if validation fails
    return decoded;
};