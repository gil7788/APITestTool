const headersConfig = {
    GET: [
      "Accept",
      "Authorization",
      "Cache-Control",
      "If-Modified-Since",
      "User-Agent"
    ],
    POST: [
      "Content-Type",
      "Content-Length",
      "Authorization",
      "Accept",
      "User-Agent"
    ],
    PUT: [
      "Content-Type",
      "Content-Length",
      "Authorization",
      "If-Match",
      "User-Agent"
    ],
    DELETE: [
      "Authorization",
      "If-Match",
      "User-Agent"
    ]
  };
  
  export default headersConfig;
  