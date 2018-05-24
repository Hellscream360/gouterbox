const deployer = require("travis-ftpr");

new deployer().deploy({
    host: process.argv[2],
    username: process.argv[3],
    password: process.argv[4],
    localDirectory: process.argv[5],
    remoteDirectory: process.argv[6]
}, function() {
    console.log("Go to Starbucks and pay a coffee to André because he nailed it !!");
});
