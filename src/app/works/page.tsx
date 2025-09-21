

export default function Works() {
  return (
    <div className="bg-yellow-50 py-14 md:py-20">
      <div>
        <div className="text-center pb-14 md:pb-20">
          <h2 className="font-rocksolt text-cyan-500 text-4xl md:text-5xl lg:text-6xl mb-4">Works</h2>
          <p className="font-notsans text-zinc-400 text-base md:text-xl pt-2.5">作品一覧</p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-y-4 md:gap-y-24">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10">
            <p className="font-notsans text-2xl md:text-4xl mb-3 border-b-2 border-cyan-500">POSTER</p>
            <p className="font-notsans text-lg md:text-2xl mb-7">相模川ふれあい科学館</p>
            <p className="font-notsans text-base md:text-lg">神奈川県相模原市にある「相模川ふれあい科学館」のA3ポスターを制作。 『相模川に集い、親しみ、楽しく学ぶ交流拠点』というコンセプトを持つ、身近な生き物や自然に触れることのできる地域密着型の水族館。 行ってみたい気持ちになるようなデザインを目指しました。</p>
          </div>
          <img src="/image/suizokukanposter.jpg" alt="poster" className="shadow-lg w-full md:w-1/2"/>
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-10 mt-28 md:mt-0">
            <p className="font-notsans text-2xl md:text-4xl mb-3 border-b-2 border-cyan-500">BANNER</p>
            <p className="font-notsans text-lg md:text-2xl mb-7">LAMP</p>
            <p className="font-notsans text-base md:text-lg">スクールの課題であるLAMPのバナーを制作。 サウナで有名なLAMPは、アウトドアアクティビティやアウトドアサウナなど、自然を肌で感じる体験を提供している宿泊施設。 心が軽くなるような、清涼感を感じたいと思わせるようなデザインを目指しました。</p>
          </div>
          <img src="/image/lampbanner.jpg" alt="banner" className="shadow-lg w-full md:w-1/2"/>
        </div>
      </div>
    </div>
  )
}
