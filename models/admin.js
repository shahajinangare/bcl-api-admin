var db = require('../dbconnection'); //reference of dbconnection.js  
var Admin =
{
    login: function(user,callback) {  
        
        return db.query("CALL proc_adm_login(?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc)",
        [
            user.emailid,
            user.password,
            user.latlong,
            user.macaddress,
            user.browser,
            user.os,
            user.source,
            user.createdby,
            user.createdip],callback);
    }, 
    unlockuser:function(user,callback){
        return db.query("CALL proc_adm_unlockuser(?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc);",
        [
            user.emailid,
            user.latlong,
            user.macaddress,
            user.browser,
            user.os,
            user.source,
            user.createdby,
            user.createdip],callback);
    },
    registration: function(user,callback) {  
            
        return db.query("CALL proc_adm_registration(?,?,?,?,?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc);",
        [
            user.name,
            user.emailid,
            user.mobileno,
            user.roleid,
            user.bussinesscode,
            user.pass,
            user.latlong,
            user.macaddress,
            user.browser,
            user.os,
            user.source,
            user.createdby,
            user.createdip],callback);
    }, 
    changePassword: function(user,callback) {  
        return db.query("CALL proc_adm_changepassword(?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc);",
            [
                user.userid,
                user.oldpwd,
                user.newpwd,
                user.latlong,
                user.macaddress,
                user.browser,
                user.os,
                user.source,
                user.modifiedip], callback);
    },
    getAllUsers: function (user, callback) {
        try
        {
        return db.query("CALL proc_adm_getuser(?,?,@o_errcode,@o_errdesc)",
            [user.i_emailid,
            user.i_userid],
            callback);
        } catch ({error}) {
            logger.error(error);
        }
    },
    updateuserinfo: function(user,callback) {  
        return db.query("CALL proc_adm_updateuser(?,?,?,?,?,?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc);",
        [
            user.userid,
            user.username,
            user.emailid,
            user.mobileno,
            user.roleid,
            user.bussinesscode,
            user.latlong,
            user.macaddress,
            user.browser,
            user.os,
            user.source,
            user.createdby,
            user.createdip],callback);
    },
    getMenubyrole: function (user, callback) {
        try
        {
            console.log(user.roleid,user.parentcode,user.loginuserid);
        return db.query("CALL proc_adm_get_menuaccess(?,?,?,@o_errcode,@o_errdesc)",
            [user.roleid,user.parentcode,user.loginuserid],
            callback);
        } catch ({error}) {
            logger.error(error);
        }
    },
    getAllroles: function (user, callback) {
        try
        {
        return db.query("CALL proc_adm_getrole(@o_errcode,@o_errdesc)",
           
            callback);
        } catch ({error}) {
            logger.error(error);
        }
    },
    activeinactiveuser:function(user,callback){
        return db.query("CALL proc_adm_activeinactiveuser(?,?,?,?,?,?,?,?,@o_errcode,@o_errdesc);",
        [
            user.emailid,
            user.latlong,
            user.macaddress,
            user.browser,
            user.os,
            user.source,
            user.createdby,
            user.createdip],callback);
    },

    
}
module.exports = Admin;  