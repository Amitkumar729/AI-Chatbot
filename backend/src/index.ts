import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections & listneres...
const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Open:${PORT} & Connected to Database!`);
    });
  })
  .catch((error) => {
    console.log(`Error while connecting to database:-  ${error}`);
  });
