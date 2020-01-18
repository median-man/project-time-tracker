const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 3001);

// Serve static assets in production only
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
