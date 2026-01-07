import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "ee8a31a0a09144899adad7d97d3e3f60",
    },
})