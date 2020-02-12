const dev = {
  apiUrl: "http://localhost:5000",
  authApiUrl: "http://localhost:5001"
};

const prod = {
  apiUrl: "/api",
  authApiUrl: "/auth"
};

const config = process.env.NODE_ENV === "production" ? prod : dev;
//const config = prod;

export default {
  ...config
};
