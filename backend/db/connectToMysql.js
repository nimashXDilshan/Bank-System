import mysql from "mysql2";

const connectToMysql =async()=>{
    try{
        await mysql.connect(process.env.MYSQL_DB_URL);
        console.log("connected to mysql");

    }catch(error){
         console.log("error connecting to mysql",error.message);
    }
}

export default connectToMysql;