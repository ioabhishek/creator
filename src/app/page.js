import Image from 'next/image'
import styles from './page.module.css'
import Poll from '@/Components/poll/Poll'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./page.module.css";
export default function Home() {
  return (
    <>
    <Poll/>
    </>
  )
}
