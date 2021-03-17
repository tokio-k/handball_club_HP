import { Faq } from "src/components/faq";
import { Headline } from "src/components/headline";
import { MainLayout } from "src/layouts/main";

export default function FaqPage() :JSX.Element {
    return (
        <MainLayout>
        <Headline title={"よくある質問"}/>
            <Faq />
        </MainLayout>
    )
}