require("dotenv").config();

let password = process.env.DATABASE_PASSWORD

module.exports = {
    mongoURI : `mongodb+srv://subhojit2000dey:${password}@cluster0.ky5fs7l.mongodb.net/?retryWrites=true&w=majority`
}