'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Poll from '@/Components/poll/Poll'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./page.module.css";
import Feedback1 from '@/Components/feedback/Feedback1';
import Feedback from '@/Components/feedback/Feedback';
export default function Home() {
  return (
    <div>
    {/* <Poll/> */}
    <Feedback1 />
    {/* <Feedback /> */}
    </div>
  )
}
