var CryptoJS = require("crypto-js");

export function crypt(dadaCrypt) {

  var ciphertext = CryptoJS.AES.encrypt(dadaCrypt, 'L0r3al*-/St_Api-=Sql!$ConexaoZ3').toString();
  return ciphertext
}


  