// unzip -p myarchive.zip path/to/zipped/file.txt >file.txt

var request = require('request'),
    zlib = require('zlib'),
    fs = require('fs'),
    out = fs.createWriteStream('out');


// TO DO 
// Check size
// if into limit unzip locally on tmp
// otherwise send error for now
// Possible solution: using S3 or EC2

// Nope
// Fetch http://example.com/foo.gz, gunzip it and store the results in 'out'
// request('http://example.com/foo.gz').pipe(zlib.createGunzip()).pipe(out);
// Nope
//  const { spawn } = require('child_process');
//  const child = spawn('find', ['.']);
//  child.stdout.on('data', data => {
//    console.log(`stdout:\n${data}`);
//  });
//  child.stderr.on('data', data => {
//    console.error(`stderr: ${data}`);
//  });

// axios.get(
//     fileUrl,
//     {headers:{'X-API-TOKEN':xxxxx}, responseType: 'arraybuffer'}
//  );
