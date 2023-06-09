var express=require('express');
var nodemailer=require('nodemailer');
const cors = require("cors");

const {google} =require('googleapis');
var app=express();
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())
app.get('/',(req,res)=>{
    console.log('firus');

})

app.post('/send-email',(req,res)=>{
    console.log(req.body);

    const {email}=req.body;
    
    const Client_id="1075497400848-a6drq67p82i98sub0g9q189fmotniiva.apps.googleusercontent.com";
    const Client_secret="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";
    const rediret_uri="https://developers.google.com/oauthplayground";
    const resfresh_token="1//04TCUCJlP7enhCgYIARAAGAQSNwF-L9IrbXnwgQdLhc28JY8qws-NXs8lkqhSrpR8ibbuzDxmjIkp1Qj1ds9VZFt0FB_RPDac-Hg";


    const oAuth2=new google.auth.OAuth2(Client_id,Client_secret,rediret_uri);

    oAuth2.setCredentials({refresh_token:resfresh_token});

    async function sendMail(){
        try {
            const accessToken=await oAuth2.getAccessToken();
            const transporter=nodemailer.createTransport(
                {
                    service:"gmail",
                    auth:{
                        type:"OAuth2",
                        user:"frankunsc@gmail.com",
                        clientId:Client_id,
                        clientSecret:Client_secret,
                        refreshToken:resfresh_token,
                        accessToken:accessToken,

                    },
                     
                }
            );
            const mailOptions={
                from:"UAA",
                to:"frankunsc@gmail.com",
                subject:"su reservaion ha sido realizada con exito",
                message:"holis"
            };
            const result =await transporter.sendMail(mailOptions);
            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }

    }
sendMail()
.then((result)=>{
    ///console.log('firus feliz'+result)
    
})
.catch((err)=>{
    console.log('balto triste '+err)
}

)

});

app.listen(3000,()=>{
    console.log('firus');
});