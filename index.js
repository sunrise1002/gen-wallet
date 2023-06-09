const ethers = require('ethers');  
const crypto = require('crypto');
const fs = require('fs');

const targets = [
  '00000000',
  '11111111',
  '22222222',
  '33333333',
  '44444444',
  '55555555',
  '66666666',
  '77777777',
  '88888888',
  '99999999',
  'aaaaaaaa',
  'bbbbbbbb',
  'cccccccc',
  'eeeeeeee',
  'ffffffff'
]

const stopTargets = [
  '0000000000',
  '1111111111',
  '2222222222',
  '3333333333',
  '4444444444',
  '5555555555',
  '6666666666',
  '7777777777',
  '8888888888',
  '9999999999',
  'aaaaaaaaaa',
  'bbbbbbbbbb',
  'cccccccccc',
  'eeeeeeeeee',
  'ffffffffff'
]

while (true) {
  const id = crypto.randomBytes(32).toString('hex');
  const privateKey = "0x"+id;
  const wallet = new ethers.Wallet(privateKey);

  for (let i = 0; i < targets.length; i++) {
    if (wallet.address.toLowerCase().includes(targets[i])) {
      const message = `${wallet.address}--${privateKey}`
      fs.appendFileSync('results.txt', `${message}\r\n`);
      console.log(message)

      if(wallet.address.includes(stopTargets[i])) break
    }
  }
}