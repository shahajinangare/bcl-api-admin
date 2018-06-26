var express = require('express');  
var router = express.Router();  
var Admin = require('../models/Admin'); 
var logger = require('../logger').Logger;
var nodemailer = require('nodemailer');

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


router.post('/activeinactiveuser', function(req, res, next) {  
    Admin.activeinactiveuser(req.body, function(err,rows,outdesc) {  
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

router.post('/sendemail', function(req, res, next) {  
    try
    {
        nodemailer.createTestAccount((err, account) => {
            if (err) {
                console.error('Failed to create a testing account');
                console.error(err);
                return process.exit(1);
            }
            
            console.log(req.body);
            console.log(req.body.toemailid + 'Credentials obtained, sending message...');
        
            // NB! Store the account object values somewhere if you want
            // to re-use the same account for future mail deliveries
        
            // Create a SMTP transporter object
            let transporter = nodemailer.createTransport(
                {
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: '', // generated ethereal user
                        pass: '' // generated ethereal password
                    },
                    logger: true,
                    debug: false // include SMTP traffic in the logs
                },
                {
                    // default message fields
        
                    // sender info
                    from: '',
                    headers: {
                        'X-Laziness-level': 1000 // just an example header, no need to use this
                    }
                }
            );
        
            // Message object
            let message = {
                // Comma separated list of recipients
                to: req.body.toemailid,

                cc:req.body.ccemailid,
                // Subject of the message
                subject: req.body.subject,
        
                // plaintext body
                text: req.body.message,
        
                // HTML body

                html:req.body.messagehtml,
                    //'<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
                    //'<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',
        
                // An array of attachments
                attachments: [
                    // String attachment
                   /* {
                        filename: 'notes.txt',
                        content: 'Some notes about this e-mail',
                        contentType: 'text/plain' // optional, would be detected from the filename
                    },
        
                    // Binary Buffer attachment
                    {
                        filename: 'image.png',
                        content: Buffer.from(
                            'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                                '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                                'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
                            'base64'
                        ),
        
                        cid: 'note@example.com' // should be as unique as possible
                    },
        
                    // File Stream attachment
                    // {
                    //     filename: 'nyan cat ✔.gif',
                    //     path: __dirname + '/assets/nyan.gif',
                    //     cid: 'nyan@example.com' // should be as unique as possible
                    // }*/
                ]
            };
        
            transporter.sendMail(message, (error, info) => {
                if (error) {
                    console.log('Error occurred');
                    console.log(error.message);
                    return process.exit(1);
                }
        
                console.log('Message sent successfully!');
                console.log(nodemailer.getTestMessageUrl(info));
        
                // only needed when using pooled connections
                transporter.close();

                res.status(200).send({
                    code:'200',
                    message:'success', 
                    result:''
                })
            });
        });

        
    } 
    catch ({error}) {
        logger.error(error);
        
    }  
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
