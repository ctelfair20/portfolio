import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles['guess-page']}>
        Home Page
      </div>
    </>
  )
}
