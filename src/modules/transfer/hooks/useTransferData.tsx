import { useMutation, useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "@core/services";
import {
  TDeleteTransfer,
  TTransfer,
  TUpdateTransfer,
} from "@app/modules/transfer/transfer.type";
import {
  createEmptyTransfer,
  deleteTransfer,
  fetchTransfers,
  updateTransfer,
} from "@app/modules/transfer/transfer.api";
import { toast } from "react-toastify";

export const useTransferData = () => {
  const { data, refetch } = useQuery<TTransfer[]>(
    ["transfer"],
    fetchTransfers,
    {
      staleTime: STALE_TIME,
    }
  );

  const handleUpdateTransfer = useMutation(
    ["transfer"],
    async (data: Partial<TUpdateTransfer>) => await updateTransfer(data),
    {
      onSuccess: () => {
        refetch();
        toast.success("Трансфер обновлен!");
      },
    }
  );

  const handleDeleteTransfer = useMutation(
    ["transfer"],
    async (data: TDeleteTransfer) => await deleteTransfer(data),
    {
      onSuccess: () => {
        refetch();
        toast.success("Трансфер удален!");
      },
    }
  );

  const handleCreateEmptyTransfer = useMutation(
    ["transfer"],
    async (data: TTransfer["dayType"]) => await createEmptyTransfer(data),
    {
      onSuccess: () => {
        refetch();
        toast.success("Трансфер добавлен!");
      },
    }
  );

  return {
    data,
    handleUpdateTransfer,
    handleDeleteTransfer,
    handleCreateEmptyTransfer,
  };
};
