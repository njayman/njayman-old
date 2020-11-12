import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <h1>Hello!</h1>
      <h2>I am Najish Mahmud.</h2>
      <h3>A backend Web Developer.</h3>
      <div>{"{"}</div>
      <ul>
        <li>backend_Environment : "NodeJS",</li>
        <li>backend_Framework : "Express",</li>
        <li>database : "MongoDB"</li>
      </ul>
      <div>{"}"}</div>
      <h4>Contact me</h4>
      <ul>
        <li style={{ padding: "5px" }}><Link href="https://t.me/njay28"><a target="_blank">Telegram</a></Link></li>
        <li style={{ padding: "5px" }}><Link href="mailto:najishm828282@gmail.com"><a target="_blank">Mail me @ najishm828282@gmail.com</a></Link></li>
        <li style={{ padding: "5px" }}><Link href="https://www.linkedin.com/in/najishmahmud/"><a target="_blank">Linkdin</a></Link></li>
      </ul>
    </div>
  )
}
