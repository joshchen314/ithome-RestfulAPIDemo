'use strict';

module.exports = {
    "base_url": "http://localhost:3000",
    "test_token": "YOURTOKEN",
    "db": {
        "production": "mongodb://localhost:27017/TODOs",
        "development": "mongodb://localhost:27017/DEV_TODOs",
        "test": "mongodb://localhost:27017/TEST_TODOs"
    }
};
