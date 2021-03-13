import { FirstView } from 'src/components/first-view'
import { MainLayout } from '../layouts/main'
import styles from '../styles/Home.module.scss'

export default function Home() : JSX.Element {
  return (
    <MainLayout>
      <FirstView />
    </MainLayout>
  )
}
