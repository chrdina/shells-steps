import { createClient } from "contentful";

var client = createClient({
  space: "r1wogzr4p3xm",
  accessToken: `${process.env.REACT_APP_API_KEY}`,
});

export default client;
