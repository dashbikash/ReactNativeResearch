import CryptoJS from "crypto-js";

var key=CryptoJS.enc.Utf8.parse("0123456789abcdef0123456789abcdef")
var iv=CryptoJS.enc.Utf8.parse("0123456789abcdef")

export const AesCBCPkcs7Encrypt=(plainText:string)=>{
    var enc =CryptoJS.AES.encrypt(plainText,key,{
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv:iv
    });
    
    return enc.toString()
}

export const AesCBCPkcs7Decrypt=(cipherText:string)=>{

    var dec =CryptoJS.AES.decrypt(cipherText,key,{
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv:iv
    })

    return CryptoJS.enc.Utf8.stringify(dec)
}

