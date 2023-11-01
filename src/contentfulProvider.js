var contentful = require("contentful");

var client = contentful.createClient({
  space: "r1wogzr4p3xm",
  accessToken: `${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
});

export default client;
