const oracledb = require('oracledb') ;

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT ;

oracledb.autoCommit = true ;


async function execute(sql,binds){

    let connection, result ;

    try{

        connection = await oracledb.getConnection({
          user: "medical" ,
          password: "12345" ,
          connectString: "localhost/orclpdb"  
        })


        const result = (await connection.execute(sql,binds)).rows ;

         console.log(result);

    }catch(err){
        console.log(err.message) ;
    }
}


module.exports = {execute} ;