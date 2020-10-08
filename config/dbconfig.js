const sql = require("mysql")
const con = sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"assignment"
})

con.connect((err)=>{
    if(err)
        console.log("Error connecting to database")
    console.log("Connected ")
})
module.exports = con