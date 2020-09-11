const axios = require("axios");
(async () => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        console.log(response);
    } catch (err) {
        console.log(err);
    }
})();
