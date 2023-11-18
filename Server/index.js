import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import Jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database:'rcbbms'
})





// Total Report Collection

app.get('/monthlyreportforcollection',(req,res)=>{
     
     console.log('Hi')

     const sql = "SELECT tbl_blood_storage.blood_group, COUNT(*) AS total_blood_bags FROM `tbl_blood_collection` JOIN `tbl_blood_storage` ON tbl_blood_collection.blood_collection_id = tbl_blood_storage.blood_collection_id WHERE YEAR(tbl_blood_collection.blood_collection_date) = YEAR(CURDATE()) AND MONTH(tbl_blood_collection.blood_collection_date) = MONTH(CURDATE()) - 1 GROUP BY tbl_blood_storage.blood_group;";
          

          db.query(sql,[],(err,data)=>{
               if(err) return res.json({Error:"Collection Data Failed"});
               if(data.length>0) 
               {
                    console.log(data)
                    
                   return res.json(data);
                    
               }
               else
               {
                    return res.json({Error:"No Data Exist There"}); 
               }
           })
          


})


// Total Blood Distribution

app.get('/monthlyreportfordistribution',(req,res)=>{
     
     console.log('Hi')

     const sql = "SELECT bs.blood_group, COUNT(*) AS total_distributed_bags FROM tbl_blood_storage bs JOIN tbl_blood_distribution bd ON bs.blood_bag_no = bd.blood_bag_no WHERE YEAR(bd.distribution_date) = YEAR(CURDATE()) AND MONTH(bd.distribution_date) = MONTH(CURDATE()) - 1 GROUP BY bs.blood_group;";
          

          db.query(sql,[],(err,data)=>{
               if(err) return res.json({Error:"Login Error in Server"});
               if(data.length>0) 
               {
                    console.log(data)
                    
                   return res.json(data);
                    
               }
               else
               {
                    return res.json({Error:"No Email Exist There"}); 
               }
           })
          


})


// AvailableBloodBag 

app.get('/availablebloodbag',(req,res)=>{
     
     console.log('Hi')

     const sql = "SELECT bs.blood_group, COUNT(*) AS total_stored_bags FROM tbl_blood_storage bs LEFT JOIN tbl_blood_distribution bd ON bs.blood_bag_no = bd.blood_bag_no WHERE bd.blood_bag_no IS NULL GROUP BY bs.blood_group; ";
          

          db.query(sql,[],(err,data)=>{
               if(err) return res.json({Error:"Login Error in Server"});
               if(data.length>0) 
               {
                    console.log(data)
                    
                   return res.json(data);
                    
               }
               else
               {
                    return res.json({Error:"No Email Exist There"}); 
               }
           })
          


})

// Login And Authentication Page

app.post('/login',(req,res)=>{

     const sql = "SELECT * FROM login WHERE email = ?";
          

          db.query(sql,[req.body.email],(err,data)=>{
               if(err) return res.json({Error:"Login Error in Server"});
               if(data.length>0) 
               {
                    
                   if(req.body.password.toString()===data[0].password.toString())
                   {
                     
                     

                    return res.json({Status:"Success"});
                   }
                   else
                   {
                    return res.json({Error:"Password Not Matched"});
                   }
                    
               }
               else
               {
                    return res.json({Error:"No Email Exist There"}); 
               }
           })
          


})
					
// Register Form Data Insert

app.post('/register',(req,res)=>{
     
     const sql = "INSERT INTO `tbl_donor`(`donor_reg_no`, `donor_name`, `donor_mobile`, `donor_address`, `donor_occupation`, `donor_blood_group`, `donor_age`, `donor_gender`, `donor_husband_or_father_name`) VALUES (?)";
     const values = [
          req.body.donorregno,
          req.body.donorname,
          req.body.donormobileno,
          req.body.donoraddress,
          req.body.donoroccupation,
          req.body.donorbloodgroup,  
          req.body.donorage,
          req.body.donorgender,
          req.body.donorhusbandorfather
          
          ]

     db.query(sql,[values],(err,result)=>{
          
          if(err) return res.json({Error:"Inserting Data Error in Server"});
          else  return res.json({Status:"Success"})
         
     })
})

								
// Testreport Data Insert

app.post('/testreport',(req,res)=>{
     
     const sql = "INSERT INTO `tbl_donor_test_report`(`test_report_id`, `hbsag`, `anti_hcv`, `m_p`, `anti_hiv`, `tpha`, `donor_reg_no`) VALUES (?)";
     const values = [
          req.body.testreportid,
          req.body.hbsag,
          req.body.antiHCV,
          req.body.malarialparasite,
          req.body.antiHIV,
          req.body.tpha,  
          req.body.donorregno,                    
          ]
     
     db.query(sql,[values],(err,result)=>{
          if(err) return res.json({Error:"Inserting Data Error in Server"});
          else  res.json({Status:"Success"})
     })
})


// Blood Collection

app.post('/bloodcollection',(req,res)=>{

     
     const sql = "INSERT INTO `tbl_blood_collection`(`blood_collection_id`, `blood_collection_date`, `blood_donation_type`, `test_report_id`, `donor_reg_no`, `donor_blood_pressure`, `donor_weight_kg`) VALUES (?)";
     const values = [
          req.body.bloodcollectionid,
          req.body.bloodcollectiondate,
          req.body.blooddonationtype,
          req.body.testreportid,
          req.body.donorregno,  
          req.body.donorbloodpressure,
          req.body.donorweight,
          ]
     
     db.query(sql,[values],(err,result)=>{
          if(err) return res.json({Error:"Inserting Data Error in Server"});
          else  res.json({Status:"Success"})
     })
})

// Blood Storage 


app.post('/bloodstorage',(req,res)=>{

     
     const sql = "INSERT INTO `tbl_blood_storage`(`blood_bag_no`, `blood_group`, `blood_collection_id`, `blood_hb_percentage`, `blood_hematocrit_percentage`, `blood_platelet_count_per_ml`, `blood_wbc_ml`, `blood_mcv_fl`) VALUES (?)";
     const values = [
          req.body.bloodbagno,
          req.body.bloodGroup,
          req.body.bloodcollectionid,
          req.body.bloodhbpercentage,
          req.body.bloodhematocritpercentage,  
          req.body.bloodplateletcountperml,
          req.body.bloodwbcperml,
          req.body.bloodmcv,
          ]
     
     db.query(sql,[values],(err,result)=>{
          if(err) return res.json({Error:"Inserting Data Error in Server"});
          else  res.json({Status:"Success"})
     })
})

// Patient Information

app.post('/patientinfo',(req,res)=>{

     
     const sql = "INSERT INTO `tbl_patient_information`(`patient_id`, `patient_name`, `patient_age`, `patient_mobile_no`, `patient_address`, `patient_blood_group`, `patient_gender`, `patient_referred_by_hospital_name`) VALUES (?)";
     const values = [
          req.body.patientid,
          req.body.patientname,
          req.body.patientage,
          req.body.patientmobileno,
          req.body.patientaddress,  
          req.body.patientbloodgroup,
          req.body.patientgender,
          req.body.hospitalnamereferredby,
          ]
     
     db.query(sql,[values],(err,result)=>{
          if(err) return res.json({Error:"Inserting Data Error in Server"});
          else  res.json({Status:"Success"})
     })
})


// Patient Cross Match Report
app.post('/patientcrossmatchreport',(req,res)=>{

     
     const sql = "INSERT INTO `tbl_cross_match_report`(`patient_cross_match_report_id`, `patient_id`, `patient_hbsag`, `patient_antihcv`, `patient_m_p`, `patient_anti_hiv`, `patient_tpha`, `patient_vdrl`) VALUES (?)";
     const values = [
          req.body.patientcrossmatchreportid,
          req.body.patientid,
          req.body.hbsag,
          req.body.antiHCV,
          req.body.malarialparasite,  
          req.body.antiHIV,
          req.body.tpha,
          req.body.vdrl,
          ]
     
     db.query(sql,[values],(err,result)=>{
          if(err) return res.json({Error:"Inserting Data Error in Server"});
          else  res.json({Status:"Success"})
     })
})



app.post('/blooddistribution',(req,res)=>{

     
     const sql = "INSERT INTO `tbl_blood_distribution`(`distribution_id`, `distribution_date`, `patient_id`, `blood_bag_no`) VALUES (?)";
     const values = [
          req.body.distributionid,
          req.body.distributiondate,
          req.body.patientid,
          req.body.bloodbagno,
          ]
     
     db.query(sql,[values],(err,result)=>{
          if(err) return res.json({Error:"Inserting Data Error in Server"});
          else  res.json({Status:"Success"})
     })
})









app.listen(8081,()=>{
     console.log("Running")
})


//montly collected
