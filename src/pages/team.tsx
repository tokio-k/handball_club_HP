import { Headline } from "src/components/headline";
import { Team } from "src/components/team";
import { MainLayout } from "src/layouts/main";

export default function TeamPage() :JSX.Element {
    return (
        <MainLayout>
            <Headline title={"チーム紹介"}/>
        <Team />
        </MainLayout>
    )
}

