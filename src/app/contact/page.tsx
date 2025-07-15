export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact</h1>
      <p className="mb-4">お問い合わせは以下のフォームからお願いします。</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">お名前</label>
          <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">メールアドレス</label>
          <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">メッセージ</label>
          <textarea id="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">送信</button>
      </form>
    </div>
  )
}