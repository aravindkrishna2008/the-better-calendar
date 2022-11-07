import styles from "../styles/Calendar.module.css";

export default function Calendar() {
  const Item = ({ text, date }) => {
    return <div className={styles.item}>{date}</div>;
  };

  return (
    <div className={styles.wrapper}>
      <Item text="his" date={1} />
      <Item text="his" date={2} />
      <Item text="his" date={3} />
      <Item text="his" date={4} />
      <Item text="his" date={5} />
      <Item text="his" date={6} />
      <Item text="his" date={7} />
      <Item text="his" date={8} />
      <Item text="his" date={9} />
      <Item text="his" date={10} />
      <Item text="his" date={11} />
      <Item text="his" date={12} />
      <Item text="his" date={13} />
      <Item text="his" date={14} />
      <Item text="his" date={15} />
      <Item text="his" date={16} />
      <Item text="his" date={17} />
      <Item text="his" date={18} />
      <Item text="his" date={19} />
      <Item text="his" date={20} />
      <Item text="his" date={21} />
      <Item text="his" date={22} />
      <Item text="his" date={23} />
      <Item text="his" date={24} />
      <Item text="his" date={25} />
      <Item text="his" date={26} />
      <Item text="his" date={27} />
      <Item text="his" date={28} />
      <Item text="his" date={29} />
      <Item text="his" date={30} />
      <Item text="his" date={1} />
      <Item text="his" date={2} />
      <Item text="his" date={3} />
      <Item text="his" date={4} />
      <Item text="his" date={5} />
    </div>
  );
}
