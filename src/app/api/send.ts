
import { NextApiRequest, NextApiResponse } from "next";//TypeScript 的な書き方（型あり） Next.js が提供する「型」なので、型補完・エラー検知が使える



export default function handler(req: NextApiRequest, res: NextApiResponse) { 
  if(req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey("process.env.SENDGRID_APIKEY as string"); //SendGridのAPIキー※本サービスは法人向けに提供しており、個人・個人事業主・任意団体の方はご利用いただけません。キー取得できず形だけ

    // 管理者へのメール 自分へ送られてくる方
    const msgToManager = {
      to: 'aoaoworks766@gmail.com',
      from: 'aoaoworks766@gmail.com',
      subject: 'ポートフォリオサイトからの問い合わせ',
      text: req.body.name +'様からお問合せがありました。' + 'メッセージ：' + req.body.message + 'アドレス：' + req.body.email,
      html: `
        <p>【名前】</p>
        <p>${req.body.name}</p>
        <p>【メールアドレス】</p>
        <p>${req.body.email}</p>
        <p>【メッセージ内容】</p>
        <p>${req.body.message}</p>
      `,
    };
    
    // ユーザーへのメール 問い合わせてくれた人へ送られてくる方
    const msgToUser = {
      to: req.body.email,
      from: 'aoaoworks766@gmail.com',
      subject: 'お問合せありがとうございました。',
      text: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
      html: `
        <p>${req.body.name}様</p>
        <p>お問合せを受け付けました。回答をお待ちください。</p><br/>
        <p>【問い合わせ内容】</p>
        <p>${req.body.message}</p>
      `,
    };
 
    (async () => {
      try {
        await sgMail.send(msgToManager);
        await sgMail.send(msgToUser);
        res.status(200).json(msgToUser);
      } catch (error: any) {
        console.error(error);
        res.status(500).json(error);
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })();
  }
}