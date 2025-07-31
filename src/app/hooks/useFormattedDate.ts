import { useMemo } from "react";

const useFormattedDate = (dateString: string) => {
  return useMemo(() => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      date: formattedDate,
      time: formattedTime,
    };
  }, [dateString]);
};

export default useFormattedDate;
