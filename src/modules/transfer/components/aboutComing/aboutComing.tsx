import styles from "./aboutComing.module.scss";
import { Text } from "@app/ui";
import aboutComing from "@app/assets/aboutComing.png";

export const AboutComing = () => {
  return (
    <div className={styles.wrapper}>
      <Text size={14} font="Jost">
        Обращаем ваше внимание, что трансфер до места проведения фестиваля
        осуществляется только из мест, указанных на этой странице. Вас встретит
        человек с соответствующей табличкой.
      </Text>
      <img width={200} src={aboutComing} />
      <Text size={14} font="Jost">
        Если возникают вопросы по трансферу, то можно позвонить по номеру +7
        (903) 152-46-26 (Алексей)
      </Text>
    </div>
  );
};
