import styles from "./index.module.scss";
import { MapBlock } from "@app/modules/map";

export const MapScreen = () => {
  return (
    <div className={styles.wrapper}>
      <MapBlock />
    </div>
  );
};
