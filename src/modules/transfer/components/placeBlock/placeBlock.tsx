import React, { useId, useState } from "react";
import styles from "./placeBlock.module.scss";
import { Text, Tooltip } from "@app/ui";
import { colors } from "@app/shared";
import { EditModal } from "@app/modules/transfer/components/editModal/editModal";
import { useProfile } from "@app/modules/auth/hooks/useProfile";
import { Role } from "@app/modules/auth/auth.type";

export type TPlaceBlock = {
  id: string;
  title: string;
  info: {
    name: string;
    aboutBus: string;
    contactWithDriver: string;
    time: string;
  }[];
};

const TooltipPlace: React.FC<TPlaceBlock["info"][0]> = ({
  aboutBus,
  contactWithDriver,
  name,
}) => {
  return (
    <div className={styles.blockTooltip}>
      <Text color={colors.four}>{name}</Text>
      <Text color={colors.four}>{aboutBus}</Text>
      <Text.Link
        font="Jost"
        external
        color={colors.four}
        to={contactWithDriver}
      >
        связаться с водителем
      </Text.Link>
    </div>
  );
};

export const PlaceBlock: React.FC<TPlaceBlock> = ({ title, info, id }) => {
  const { data: profile } = useProfile();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState<TPlaceBlock | null>(null);

  const handleChooseTooltip = (drive: TPlaceBlock) => {
    if (profile?.data.role === Role.TalonsMan) {
      setModalOpen(true);
      setEditData(drive);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditData(null);
  };

  const idKey = useId();

  return (
    <>
      <div className={styles.wrapper}>
        <Text color={colors.secondary}>{title}</Text>
        <div className={styles.blocksWrapper}>
          {info.map((drive, index) => (
            <Tooltip
              key={`${idKey}-${index}`}
              title={<TooltipPlace {...drive} />}
            >
              <div
                onClick={() => handleChooseTooltip({ info, title, id })}
                className={styles.block}
              >
                <Text>{drive.time}</Text>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
      <EditModal
        onClose={handleCloseModal}
        open={isModalOpen}
        setIsOpen={setModalOpen}
        editData={editData}
      />
    </>
  );
};
