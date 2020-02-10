const nanoid = require("/home/spartak/project/lab-76/api/node_modules/nanoid");
const fs = require('fs');

const filename = './db.json';

let data = [];
const readFile =  ()=>{
  return new Promise((resolve,reject)=>{
      fs.readFile(filename,(err, content)=>{
          if (err){
              reject(err)
          } else {
              data = JSON.parse(content);
              resolve()
          }
      })
  })
};
const writeFiles =  ()=>{
    console.log('');
    return    new Promise((resolve,reject)=>{
let dataString = JSON.stringify(data, null, 2);
        fs.writeFile(filename,dataString, err =>{
            if (err){
                reject(err)
            }else {
                resolve(data)
            }
        })
    });
};
module.exports = {
 async   init() {
        try {
           await readFile()
        } catch (e) {
            data = []
        }
    },
    getMessages() {
        return data.slice(-30)
    },
    getMessageByDateTime(dateTime){
        return  data.filter(item => item.dateTime > dateTime)

    },
 addMessages(message) {
        message.id = nanoid();
        message.dateTime = new Date().toISOString();
        data.push(message);
        this.save();
    },
   async save(){
       await writeFiles()

    }
};