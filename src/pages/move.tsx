import { Headline } from "src/components/headline";
import { MainLayout } from "src/layouts/main";

export default function Move() :JSX.Element {
    return (
        <MainLayout>
        <Headline title={"動画紹介ページ"}/>
        動画紹介ページ作成中
        <div>
        <video controls width="200">
            <source src="/img/637565696.466592.mp4" type="video/mp4"/>
        </video>
        <video controls width="200">
            <source src="/img/637565696.641354.mp4" type="video/mp4"/>
        </video>
        <video controls width="200">
            <source src="/img/637565696.759496.mp4" type="video/mp4"/>
        </video>
        </div>
        </MainLayout>
    )
}