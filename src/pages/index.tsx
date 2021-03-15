import { FirstView } from 'src/components/first-view'
import { Instagram } from 'src/components/instagram'
import { Menu } from 'src/components/menu'
import { Message } from 'src/components/message'
import { MainLayout } from '../layouts/main'

export default function Home() : JSX.Element {
  return (
    <MainLayout>
      <FirstView />
      <Message />
      <Menu
        img="/img/S__107782152.jpg"
        title="チーム紹介"
        description="チームについて紹介します。練習日数や練習場所、部員等について知りたい方はこちら"
        link= "/team"
        position ="left"
      />
      <Menu
        img="/img/S__107782153.jpg"
        title="練習紹介"
        description="練習について紹介します。練習の雰囲気や練習メニュー等について知りたい方はこちら"
        link= "/practice"
        position ="right"
      />
      <Menu
        img="/img/S__107642883.jpg"
        title="動画"
        description="試合のプレー動画です。ハンドボール未経験の方はぜひ、こちらの動画をチェックしてみてください"
        link= "/move"
        position ="left"
      />
      <Menu
        img="/img/S__107642885.jpg"
        title="よくある質問"
        description="未経験の人はいる？大学生活との両立は？部活は厳しい？等の質問にお答えしています。"
        link= "/faq"
        position ="right"
      />
      <Menu
        img="/img/S__107782150.jpg"
        title="お問い合わせ"
        description="聞きたいことがあれば、是非お気軽にご連絡ください。練習試合申し込み、愛知大学生の部活の参加もお待ちしております。"
        link= "/contact"
        position ="left"
      />
      <Instagram />
    </MainLayout>
  )
}
