import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, callback)=>{
        callback(null, Date.now()+file.originalname)
    }
})


export const upload = multer({
    storage: storage,
})