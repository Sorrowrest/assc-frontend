import styles from "./map.module.scss";

export const MapBlock = () => {
  return (
    <div className={styles.wrapper}>
      <img
        width={800}
        src={`${process.env.REACT_APP_API_URL}upload/map.png`}
      ></img>
    </div>
  );
};
