//https://zenn.dev/c_ryoya/articles/e302715252dc9e#%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%AE%E4%BD%9C%E6%88%90
//https://sendgrid.kke.co.jp/blog/?p=14220&utm_source=google&utm_medium=cpc&utm_content=text&utm_campaign=dsa&gclid=CjwKCAiAu5agBhBzEiwAdiR5tLYhQ9B3UevVd8r7S2rJxBgeQGBN8I7_r9xQE1yE6b-LuPWhyKGiQxoCSDQQAvD_BwE

'use client';

import React from "react";


export default function Contact() {
  
  // フォーム送信時の処理
  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // ページリロード防止

    const formData = new FormData(event.currentTarget);
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        alert("お問い合わせありがとうございます。送信が完了いたしました。");
        (event.target as HTMLFormElement).reset(); // フォーム初期化
      }
    } catch (error) {
      alert("送信に失敗しました。もう一度お試しください。");
      console.error('Error:', error);
    }
  };



  return (
    <div className="py-20">
      <div>
        <div className="text-center pb-20">
          <h2 className="font-rocksolt text-cyan-500 text-4xl md:text-5xl lg:text-6xl mb-4">Contact</h2>
          <p className="font-notsans text-zinc-400 text-xl pt-2.5">お問い合わせ</p>
        </div>
        <p className="font-notsans mb-4">お問い合わせは以下のフォームからお願いします。<br />
        <span className="text-red-600">* </span>は必ず入力してください。</p>
        <form onSubmit={registerUser} className="space-y-4">
          <div>
            <label htmlFor="name" className="font-notsans block text-sm font-medium ">お名前<span className="text-red-600">* </span></label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500" required />
          </div>
          <div>
            <label htmlFor="email" className="font-notsans block text-sm font-medium text-gray-700">メールアドレス<span className="text-red-600">* </span></label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500" required />
          </div>
          <div>
            <label htmlFor="message" className="font-notsans block text-sm font-medium text-gray-700">お問い合わせ内容<span className="text-red-600">* </span></label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="font-notsans w-full py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-700">送信</button>
          </div>
        </form>
      </div>
    </div>
  )
}
