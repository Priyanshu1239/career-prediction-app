import { User}  from "../models/user.model.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import axios from 'axios';




const predict = asyncHandler(async(req,res)=>{
    try {
        const userData = {
          interests: req.body.interests,
          education: req.body.education
        };
    
        // forward to Python Flask
        const response = await axios.post('http://localhost:8000/predict', userData);
    
        res.json({
          recommended_job: response.data.recommended_job
        });
    
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error contacting ML model' });
      }
})

export{
    predict
};
