// se encarga de ser el launcher de la aplicacion
import app from "./app.js";
import { connectDB } from "./db.js";

connectDB();
app.listen(4000);
console.log('server on port',4000);