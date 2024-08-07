const fs = require('fs')
// fs = FileSystem  (fs module)

// write file
// read file
// update file
// append file
// delete file
// folder creation
//copy rename move





// create file
// fs.writeFile('abcd.txt', "hey hello", function(err){
//     if(err) console.log("error:", err);
//     else console.log("file created");
// })


// read file 
// fs.readFile("abcd.txt", "utf-8", function(err, data){
//     if(err) console.log('error', err);
//     else console.log(data);
// })
// utf-8 = convert decimal code into text


// appended data
// fs.appendFile('abcd.txt', " appended data", function(err){
//     if(err) console.log(err);
//     else console.log("appended data");
// })


// rename data 
// fs.rename('abcd.txt', 'hey.txt', function(err){
//     if(err) console.log(err);
//     else console.log("renamed");
// })


// delete file
// fs.unlink('hey.txt', function(err){
//     if(err) console.log(err);
//     else console.log(deleted);
// })

// create folder
// fs.mkdir('folder', function(err){
//     if(err) console.log(err);
//     else console.log("folder created")
// })

// read folder
// fs.readdir('folder',{withFileTypes: true}, function(err, files){
//     if(err) console.log(err);
//     else console.log(files);
// })  // symbol 1 = file , symobol 2 = folder 


// delete folder
// fs.rmdir('folder',{recursive : true}, function(err){
//     if(err) console.log(err);
//     else console.log("deleted folder")
// })  recursive means delete first inner folders, file then delete folder


// new way
// delete folder
// fs.rm('folder',{recursive : true}, function(err){
//     if(err) console.log(err);
//     else console.log("deleted folder")
//  })  // recursive means delete first inner folders, file then delete folder

// not use bacause ager ye wali line execute nahi hogi to aage ki bhi nahi hogi 

fs.writeFileSync("yoyo.txt", "whatever");

const data = fs.readFileSync('yoyo.txt', "utf-8");