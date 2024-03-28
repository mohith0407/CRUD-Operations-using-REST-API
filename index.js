import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js';

const app=express();
const PORT=5000;
app.use(bodyParser.json());
app.get('/',(req,res)=>{

    res.send('Hello Home');
})
app.use('/users',userRoutes);
app.listen(PORT,()=>console.log(`Server running on: http://localhost:${PORT}`))
