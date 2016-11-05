var express=require('express');
var app=express();

var fs=require('fs');
//Email

var http=require('http');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser')

//Path

var path=require('path');
app.use(express.static(path.join(__dirname,'public')));


//Router

var router=require('router');
app.set('view engine','ejs');
var routes=require('./routes');
//Home

app.get('/',routes.home);




var port = Number(process.env.PORT || 80);
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


// client ip save in text file

	// fs.appendFile('ip.txt' +JSON.stringify(req.body.myLink)+ function (err) {});



// mail Sending scripts


// sending mail function for Actual Sample Flat form

app.post('/send', function(req, res)
{
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "" || req.body.pickupdate1 == "" || req.body.pickuptime1 == "" || req.body.am == "" ) {
	
	
  res.send("field should not blank");
  return false;
}

var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
            from: req.body.email, // sender address
    to:"horizonpropertyproject@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Actual Sample Flat", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br><b>Visit Date  "+req.body.pickupdate1+"</b><br><b>visit Time:  "+req.body.pickuptime1+" "+req.body.am+"</b></br>" // html body

        }
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 

});




// sending mail function for Visit Site form

app.post('/send1', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "" || req.body.pickupdate1 == "" || req.body.pickuptime1 == "" || req.body.am == "" ) {
  res.send("field should not blank");
  return false;
}

var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
            from: req.body.email, // sender address
 to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Visit Site", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br><b>Visit Date  "+req.body.pickupdate1+"</b><br><b>visit Time:  "+req.body.pickuptime1+" "+req.body.am+"</b></br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 



});

// sending mail function for Home Presentation form

app.post('/send2', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "" || req.body.pickupdate1 == "" || req.body.pickuptime1 == "" || req.body.am == "" ) {
  res.send("field should not blank");
  return false;
}

var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
        from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Home Presentation", // Subject line
     html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br><b>Visit Date  "+req.body.pickupdate1+"</b><br><b>visit Time:  "+req.body.pickuptime1+" "+req.body.am+"</b></br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
});



// sending mail function for Register Now form

app.post('/send3', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
      from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Register Now", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
});


// sending mail function for Download Broucher form

app.post('/send4', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}

var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
       from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt :Download Broucher", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
});

// sending mail function for Get Latest Price form

app.post('/send5', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
     from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Get Latest Price", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
 });
// sending mail function for Virtual Tours form

app.post('/send6', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
     from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Virtual Tours", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
 });
// sending mail function for Book Online form

app.post('/send7', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}

var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
     from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Book Online", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
 
});


// sending mail function for Group Booking form

app.post('/send8', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}

 var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
    from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Group Booking", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 

});

// sending mail function for Get Instant Call Back form

app.post('/send9', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "") {
  res.send("field should not blank");
  return false;
}
var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
    from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt :Call Back", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
});


// sending mail function for Enquiry form

app.post('/send10', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == ""|| req.body.type == "") {
  res.send("field should not blank");
  return false;
}
 var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
  from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Enquiry", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
});
// sending mail function for Call Us form

app.post('/send11', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "") {
  res.send("field should not blank");
  return false;
}
var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
  from: req.body.email,
    to:"prerana.nerkar1@gmail.com", 
    subject: "Enquiry for the price of sheth zuri platinum-belt : Call Me", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
 });

// sending mail function for Contact Us form

app.post('/send12', function(req, res){
if(req.body.name == "" ||req.body.email == "" || req.body.mobile == "" || req.body.type == "" || req.body.comment == "") {
  res.send("field should not blank");
  return false;
}

var smtpTransport = nodemailer.createTransport("SMTP",{
             host: "smtp.live.com", // hostname
    secureConnection: true, // use SSL
    port: 25, // port for secure SMTP
            auth: {
                 user: "horizonpropertyproject@hotmail.com",
                 pass: "horizon1234"
            }
        });
        var mailOptions = {
  from: req.body.email, // sender address
    to:"prerana.nerkar1@gmail.com", // list of receivers
    subject: "Enquiry for the price of sheth zuri platinum-belt : Contact Us", // Subject line
    html: "<b>Client Name:  "+req.body.name+" </b><br><b>Email Id:  "+req.body.email+"</b><br><b>Country:  "+req.body.Country+"</b><br><b>Mobile No.:  "+req.body.mobile+"</b><br><b>Require Room Type:  "+req.body.type+"</b><br><b>"+req.body.comment+"</b>" // html body
}
        smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
             res.send("Email could not sent due to error: "+error);
        }else{
             res.send("Email has been sent successfully");
        } 
    }); 
 });
app.listen(80);
