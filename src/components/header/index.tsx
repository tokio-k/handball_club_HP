import cc from "classcat"
import styles from "src/components/header/index.module.scss";
import Link from "next/link";
import { useState } from "react";

export function Header(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
        const openMenu = () => {
            setIsOpen(!isOpen);
            console.log(isOpen);
        }
    return (
        <>
        <header className={styles.container}>
            <div>
                <Link href="/">
                    <a>
                        AICHI UNIV.<br/>
                        Handball Team
                    </a>
                </Link>
            </div>

            <span className={cc([
                styles.navbtn,
                {
                    [styles.closebtn]: isOpen == true,
                },
            ])} onClick={openMenu}>
                <div></div>
                <div></div>
                <div></div>
            </span>

            <nav className={cc([
                styles.nav,
                {
                    [styles.open]: isOpen == true,
                }
            ])}>
                <ul>
                    <li>
                        <Link href="/">
                            チーム紹介
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/">
                            練習紹介
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/">
                            動画
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/">
                            よくある質問
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/">
                            お問い合わせ
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        <div className={styles.blank}></div>
        </>
    )
}