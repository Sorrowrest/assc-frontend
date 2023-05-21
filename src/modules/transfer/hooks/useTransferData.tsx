import { useQuery } from "@tanstack/react-query";
import { STALE_TIME } from "@core/services";
import { TTransfer } from "@app/modules/transfer/transfer.type";
import { fetchTransfers } from "@app/modules/transfer/transfer.api";

export const useTransferData = () => {
  const { data } = useQuery<TTransfer[]>(["transfer"], fetchTransfers, {
    staleTime: STALE_TIME,
  });

  return {
    data,
  };
};
