const fs = require("fs")
const path = require("path")
 
const root = path.join(__dirname)

readDirSync(root)
function readDirSync(path){
	const pa = fs.readdirSync(path);
	pa.forEach(function(ele,index){
		const info = fs.statSync(path+"/"+ele)	
		if(info.isDirectory()){
			readDirSync(path+"/"+ele);
		}else{
			console.log(ele)
		}	
	})
}
