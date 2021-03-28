const NODE_ENV = process.env.NODE_ENV
const config = NODE_ENV === "isDev" ? {
    port:3000,
    db_url:"mongodb://localhost:27017",
    db_name:"hrms",
    salt_rounds:12,
    TOKEN_TIME:60*60*24*30,
    SECRET: "W3 Ar3 M3Rn D3v3L0p3Rs"

} : {
    port:"8080",
    db_url:"",
    db_name:"",
    salt_rounds:12,
    TOKEN_TIME:60*60*24*30,
    SECRET: "W3 Ar3 M3Rn D3v3L0p3Rs"
}

export default config;