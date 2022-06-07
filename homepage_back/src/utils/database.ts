require('dotenv').config({path: '~~/.env'})
const mysql = require('mysql');
// SQLHOST="localhost"
// SQLPORT="3306"
// SQLUSER="Rihyette"
// SQLPASSWORD="password"
// SQLDATABASE="homepage"
export class Database {
    establishedConnection : any;
    constructor(){
        this.establishedConnection = null;
    }
    connection(): any{
        return new Promise((resolve,reject)=> {
            resolve(mysql.createConnection({
                host: "localhost",
                user: "Rihyette",
                password: "password",
                database: "homepage",
              }))
        })
    }
    connect():any {
        if(!this.establishedConnection){
            this.establishedConnection = this.connection().then((res:any) => {
                res.connect((err:any) => {
                    if(err){
                        this.dropConnection();
                        throw err
                    }
                    console.log(res.state, "connected")
                    let temp = res.query("SELECT * FROM user");
                    return temp;
                } )
            })
        }
    }
    dropConnection(){
        if(this.establishedConnection) {
            this.establishedConnection.then((res:any) => {
                res.end();
                console.log(res.state, 'connection dropped');
            });
            this.establishedConnection = null;
        }
    }
  }