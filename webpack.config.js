'use strict';

module.exports = (env, argv) => {

    console.log(`Environment Build: ${env.build}`);

    switch (env.build) {
        case "prod":
            return require("./webpack.prod.js")
        case "dev":
            return require("./webpack.dev.js");
        default:
            console.log("Error: parameter build could not be found");
            break;
    }
};