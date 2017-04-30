/**
 * Created by VictorMiranda on 03/02/2017.
 */

const jwt = require('jwt-simple');
const moment = require('moment');
const config =require('../../config');

function createToken(user){
    console.log("Create Token for " + user.username);
    const payload = {
        sub: user._id,
        iat: moment().unix(), // Data token created
        exp: moment().add(14, 'days').unix() // Expired data
    }
    return jwt.encode(payload, config.SECRET_TOKEN);

}

function decodeToken(token){
    const decoded = new Promise(function (resolve, reject){
        try{
            payload = jwt.decode(token, config.SECRET_TOKEN)

            if(payload.exp <= moment().unix()){
                resolve({
                    status: 401,
                    message: "Token expired"
                })
            }
            resolve (payload.status);
        }
        catch(err){
            reject({
                status: 500,
                message: "Invalid Token"
            })
        }
    })
    return decoded;
}

module.exports = {
    createToken,
    decodeToken
}