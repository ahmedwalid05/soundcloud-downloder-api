const scdl = require('soundcloud-downloader')
var crypto = require("crypto");
const fs = require('fs')

class SoundCloudService {



    /**
     * Download The song and save  it to a local file
     * @param {string} songUrl Url of the song to download
     * @returns {string} Returns the saved filename
     */
    async downloadFile(songUrl){
        if(!scdl.isValidUrl(songUrl)){
            return;
        }
        let songInfo = await scdl.getInfo(songUrl);
        
        do{
            var filename = this.getFilename(songInfo.title)
            var path = `${process.env.SAVE_LOCATION}${filename}`
        }while(fs.existsSync(path))

        
        let songStream = await scdl.download(songUrl)
        await songStream.pipe(fs.createWriteStream(path))
        return filename;

    }
    /**
     * Generate file name using the song's name and a random generated 10 char string  
     * @param {string} songName 
     * @returns {string} filename
     */
    getFilename(songName){
        return songName+  crypto.randomBytes(10).toString('hex')+".mp3";
    }
}
module.exports = new SoundCloudService();

