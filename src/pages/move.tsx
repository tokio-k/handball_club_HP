import { Headline } from "src/components/headline";
import { Moves } from "src/components/moves";
import { MainLayout } from "src/layouts/main";

export default function MovePage() :JSX.Element {
    return (
        <MainLayout>
        <Headline title={"動画紹介"}/>
        動画紹介ページ作成中
        <Moves />
        </MainLayout>
    )
}