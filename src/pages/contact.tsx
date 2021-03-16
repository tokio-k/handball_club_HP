import { Headline } from "src/components/headline";
import { MainLayout } from "src/layouts/main";
import { Contact } from "src/components/contact";

export default function ContactPage() :JSX.Element {
    return (
        <MainLayout>
        <Headline title={"お問い合わせ"}/>
        <Contact />
        </MainLayout>

    )
}