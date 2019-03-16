class Files {
    
    constructor(){
        this.file = {
            allowedType:[
                'jpg',
                'jpeg',
                'png',
                'pdf'
            ],
            isFile:false
        }
    }

    extentionFromType(type){
        return type.split('/')[1];
    }

    getExtensionFromName(name){
        let fileExtension = name.substring(name.lastIndexOf('.')+1);
        return fileExtension;
    }

    getAllowedFileType(){
        return this.file.allowedType;
    }

    isFileValid(extention){
        return this.file.allowedType.indexOf(extention)>-1?true:false;
    }

    isFileValidToUpload(name){
        return this.isFileValid(this.getExtensionFromName(name));
    }

}

export default new Files();