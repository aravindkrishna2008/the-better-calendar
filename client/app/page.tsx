import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Calendar from "../components/calendar";

export default function HomePage() {
  return (
    <div>
      <Calendar />
      <h1>Hi</h1>
    </div>
  );
}
