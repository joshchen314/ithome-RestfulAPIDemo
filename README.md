remember to add `config/config.js`

```
'use strict';

module.exports = {
    "base_url": "http://localhost:3000",
    "test_token": "YOURTOKEN",
    "db": {
        "production": "mongodb://YOUR_IP:27017/TODOs",
        "development": "mongodb://YOUR_IP:27017/DEV_TODOs",
        "test": "mongodb://YOUR_IP:27017/TEST_TODOs"
    }
};
```