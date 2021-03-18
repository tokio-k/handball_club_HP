import { Headline } from "src/components/headline";
import { Tables } from "src/components/table";
import { MainLayout } from "src/layouts/main";

const PRACTICES = [
    {
        label: "普段の練習例",
        items: [
            {
                title:"19:00~",
                content:"フリーアップ",
            },
            {
                title:"19:15~",
                content:"シュート",
            },
            {
                title:"19:20~",
                content:"2対2",
            },
            {
                title:"19:30~",
                content:"3対3",
            },
            {
                title:"19:40~",
                content:"4対4",
            },
            {
                title:"20:00~",
                content:"6対6",
            },
            {
                title:"20:30~",
                content:"ゲーム",
            },
        ],
    },
]



export default function PracticePage() :JSX.Element {
    return (
        <MainLayout>
        <Headline title={"練習紹介"}/>
        <Tables tables={PRACTICES} />
        <div>
            <div>※進み具合により時間は前後します。</div>
            <div>※基本的に、本数で練習を区切っています。</div>
            <div>※本数は当日の進み具合で決めます。</div>
        </div>
        </MainLayout>
    )
}