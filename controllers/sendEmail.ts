import { Request,Response } from "express"
import nodemailer from "nodemailer"

export const sendEmail=async(req:Request,res:Response)=>{
    let testAccount=await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'austyn.parker@ethereal.email',
        pass: 'aa1TQMKHhdPYa5fTvP'
    }
});

  let info=await transporter.sendMail({
     
    from: ' "KanYezzy" <ye@gmail.com>',
    to:"alice@example.com, bob@example.com",
    subject:"Hello",
    html:'<h2>Sending email with nodeTS</h2>'

})
res.send(info)
}