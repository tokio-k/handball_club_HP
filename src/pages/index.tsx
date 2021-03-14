import { FirstView } from 'src/components/first-view'
import { Instagram } from 'src/components/instagram'
import { Menu } from 'src/components/menu'
import { MainLayout } from '../layouts/main'
import styles from '../styles/Home.module.scss'

export default function Home() : JSX.Element {
  return (
    <MainLayout>
      <FirstView />
      <div>
      <br/>
      <br/>
      <br/>
        メッセージ文
        <br/>
        <br/>
        メッセージ文
        <br/>
        <br/>
        <br/>
      </div>
      <Menu
        img="/img/S__107642883.jpg"
        title="チーム紹介"
        description="チームについて紹介します。練習日数や練習場所、部員などについて知りたい方はこちら"
        link= ""
      />
      <Menu
        img="/img/S__107642885.jpg"
        title="練習紹介"
        description="練習について紹介します。練習の雰囲気や練習メニューについて知りたい方はこちら"
        link= ""
      />
      <Menu
        img="/img/S__107642883.jpg"
        title="動画"
        description="試合のプレー動画です。ハンドボール未経験の方はぜひ、こちらの動画をチェックしてください"
        link= ""
      />
      <Menu
        img="/img/S__107642885.jpg"
        title="よくある質問"
        description="未経験はいますか？大学生活との両立は？厳しい？などなどの質問にお答えしています。"
        link= ""
      />
      <Menu
        img="/img/S__107642883.jpg"
        title="お問い合わせ"
        description="聞きたいことがあれば、ぜひご連絡ください。練習試合申し込みもお待ちしております。"
        link= ""
      />
      <Instagram />
    </MainLayout>
  )
}
