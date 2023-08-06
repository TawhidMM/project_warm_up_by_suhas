const database = require('./database/database');


async function registerPatient(req,res){

    console.log('req recieved for registering patient:',req.body);

    const {id,email,password,first_name,last_name} = req.body ;

    let sql,result ;

    sql = 'select * from patient where patient_id=:id' ;

    try{

        result = (await database.execute(sql,{id:id})).rows ;

    }catch(err){
        console.log(err);
    }


    if(result.length!=0){

        return res.json({success:false , message:"patient already exists"}) ;

    }


    sql = 'insert into patient(patient_id,email,password,first_name,last_name) values(:id,:email,:password,:first_name,:last_name) ' ;
    let binds ;
    binds = {id:id,email:email,password:password,first_name:first_name,last_name:last_name} ;

    try{
        (await database.execute(sql,binds)) ;

    }catch(err){
        console.log(err);
    }

    res.json({success:true,message:"patient registered successfully"}) ;

}

module.exports = {patientController} ;