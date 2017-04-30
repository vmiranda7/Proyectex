/**
 * Created by VictorMiranda on 03/02/2017.
 */
 const ip = require("ip");

module.exports = {
    ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "localhost" || ip.address() ,
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost/proyectodb',
    SECRET_TOKEN: 'tokenproyect'
}