const sass = require('node-sass');
const fs = require('fs');

sass.render({
	  file: './PageFrame.scss',
      outFile: './PageFrame.css'
        }, function(error, result) { // node-style callback from v3.0.0 onwards
    if(!error){
      // No errors during the compilation, write this result on the disk
      fs.writeFile('./PageFrame.css', result.css, function(err){
        if(!err){
          console.log('file written on disk');
        } else {
        	console.log('Err',err)
        }
      });
    } else {
    	console.log('Error',error)
	}
  });