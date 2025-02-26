const mdb = require("mongoose");
const signupSchema = new mdb.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phoneNumber: String, //, is optional
});
const signup_schema = mdb.model("signup", signupSchema);//signup is modelname

module.exports = signup_schema;
