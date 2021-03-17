import { Headline } from "src/components/headline";
import { Practice } from "src/components/practice";
import { MainLayout } from "src/layouts/main";

export default function PracticePage() :JSX.Element {
    return (
        <MainLayout>
        <Headline title={"練習紹介"}/>
        <Practice />

        </MainLayout>
    )
}