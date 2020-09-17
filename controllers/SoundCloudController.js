const soundCloudService = require('../services/SoundCloudService')
class SoundCloudController {

    handleDownloadRequest(req, res){
        let url = req.params[0];
        console.log(url)
        //Checking if url is passed AND if it's a url
        if(!url){
            return res.status(400).send("Please attach a URL");
        }

        //Downloading The file and sending the response 
        soundCloudService.downloadFile(url).then( (filename) => {

            //If file is not saved, no file name will be returned, send error
            if(!filename){
                return res.status(500).send("Unknown Service Error")
            }

            return res.status(200).send(`File Saves Successfully With the name: [${filename}]`)
        }).catch (error =>{
            return res.status(500).send(`Error Occurred: ${error.message}`)
        })


    }


}
module.exports= new SoundCloudController();