var express = require('express');  
var router = express.Router();  
var Admin = require('../models/Admin'); 
var logger = require('../logger').Logger;
//var nodemailer = require('nodemailer');
var code;
var message;

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'npnileshpatil1986@gmail.com',
//       pass: 'pranil@902862'
//     }
//   });
  
//   var mailOptions = {
//     from: 'npnileshpatil1986@gmail.com',
//     to: 'npnileshpatil1986@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   })

router.post('/login', function(req, res, next) {  
    Admin.login(req.body, function(err,rows) {  
        try
        {
        if (err) 
        {  
            logger.error(err); 
            res.json(err); 
            
        } else { 
           //console.log(req.body);
           //console.log(rows);
           //addedd  pravin added
           var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
           
            switch(Code)
                {
                    case 200:
                        res.status(200).send({
                            code:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode,
                            message:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errdesc, 
                            result:rows[0]
                        })
                        break;
                        default:
                    res.status(200).send({
                        code: JSON.parse(JSON.stringify(rows[0]))[0].o_errcode,
                        message: JSON.parse(JSON.stringify(rows[0]))[0].o_errdesc, 
                        result:""
                    });
                        
        

                }
        }
    }
    catch({error})
    {
        logger.error(error);
    }  
    });  
});

router.post('/userunlock', function(req, res, next) {  
    Admin.unlockuser(req.body, function(err,rows,outdesc) {  
        try
        {
        if (err) 
        {   logger.error(err);
            res.json(err);  
        } else { 
           
            var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
           
            switch(Code)
                {
                    case 200:
                        res.status(200).send({
                            code:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode,
                            message:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errdesc, 
                            result:""
                        })
                        break;
                        default:
                    res.status(200).send({
                        code: JSON.parse(JSON.stringify(rows[0]))[0].o_errcode,
                        message: JSON.parse(JSON.stringify(rows[0]))[0].o_errdesc, 
                        result:""
                    });
                        
        

                }
            
            
        } 
    } 
    catch({error})
    {
        logger.error(error);
    }
    });  
});


router.post('/getusers', function(req, res, next) {  
    Admin.getAllUsers(req.body, function(err,rows) {  

        try {   
        if (err) 
        {  
           
            res.json(err);  
        } else { 
             

            // var mailOptions = {
            //     from: 'npnileshpatil1986@gmail.com',
            //     to: 'npnileshpatil1986@gmail.com',
            //     subject: 'Sending Email using Node.js',
            //     text: 'That was easy!'
            //   };

            logger.info("Test Messageaaaa");
            res.status(200).send({
                code: JSON.parse(JSON.stringify(rows[1]))[0].o_errcode,
                message: JSON.parse(JSON.stringify(rows[1]))[0].o_errdesc, 
                result:rows[0]  });
        }  
    } catch ({error}) {
        logger.error(error);
    }
    });  

});

router.post('/registration', function(req, res, next) { 
    Admin.registration(req.body, function(err,rows) {  
        try{
                if (err) 
                {  
                    logger.error(err);
                    res.json(err);  
                } else {  
                    var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
                    switch(Code)
                        {
                        case 200:
                                res.status(200).send({
                                    code: JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode,
                                    message: JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errdesc, 
                                    result:rows[0]
                                });
                        break;
                        default:
                            res.status(200).send({
                                code: JSON.parse(JSON.stringify(rows[0]))[0].o_errcode,
                                message: JSON.parse(JSON.stringify(rows[0]))[0].o_errdesc, 
                                result:""
                            });
                        }
                    }
    
        } 
        catch ({error}) {
            logger.error(error);
        }
    });  
});

router.post('/changepassword', function(req, res, next) { 
    Admin.changePassword(req.body, function(err,rows) {  
        try{
            if (err){  
                    logger.error(err);
                    res.json(err);  
                } 
            else {  
                    var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
                    switch(Code)
                        {
                        case 200:
                                res.status(200).send({
                                    code: JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode,
                                    message: JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errdesc, 
                                    result:""
                                });
                        break;
                        default:
                            res.status(200).send({
                                code: JSON.parse(JSON.stringify(rows[0]))[0].o_errcode,
                                message: JSON.parse(JSON.stringify(rows[0]))[0].o_errdesc, 
                                result:""
                            });
                        }
                }
        }
        catch ({error}) {
            logger.error(error);
        }
    });  
});

router.post('/updateuser',function(req,res,next){
        Admin.updateuserinfo(req.body, function(err,rows) {  
            try
            {
            if (err) 
            {   logger.error(err);
                res.json(err);  
            } else { 
               
                var Code = JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode;
               
                switch(Code)
                    {
                        case 200:
                            res.status(200).send({
                                code:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errcode,
                                message:JSON.parse(JSON.stringify(rows[rows.length-2]))[0].o_errdesc, 
                                result:""
                            })
                            break;
                            default:
                        res.status(200).send({
                            code: JSON.parse(JSON.stringify(rows[0]))[0].o_errcode,
                            message: JSON.parse(JSON.stringify(rows[0]))[0].o_errdesc, 
                            result:""
                        });
                            
            
    
                    }
                
                
            } 
        } 
        catch({error})
        {
            logger.error(error);
        }
    });
});



router.post('/getmenubyrole', function(req, res, next) {  
    Admin.getMenubyrole(req.body, function(err,rows) {  

        try {   
        if (err) 
        {  
           
            res.json(err);  
        } else { 
            console.log(rows[0]);
             res.status(200).send({
                code: JSON.parse(JSON.stringify(rows[1]))[0].o_errcode,
                 message: JSON.parse(JSON.stringify(rows[1]))[0].o_errdesc, 
                 result:rows[0]  });

           
        }  
    } catch ({error}) {
        logger.error(error);
        
    }
    });  

});

router.get('/getroles', function(req, res, next) {  
    Admin.getAllroles(req.body, function(err,rows) {  

        try {   
        if (err) 
        {  
           res.json(err);  
        } else { 
            console.log(rows);
                res.status(200).send({
                code: JSON.parse(JSON.stringify(rows[1]))[0].o_errcode,
                message: JSON.parse(JSON.stringify(rows[1]))[0].o_errdesc, 
                result:rows[0]  });
        }  
    } catch ({error}) {
        logger.error(error);
    }
    });  

});


module.exports = router; 
