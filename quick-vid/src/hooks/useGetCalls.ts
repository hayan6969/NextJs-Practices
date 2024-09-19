import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export const useGetCalls = () => {
  const [calls, setcalls] = useState<Call[]>([]);
  const [isLoading, setisLoading] = useState(false);
  const client = useStreamVideoClient();
  const { user } = useUser();

  useEffect(() => {
    const loadCalls = async () => {
      if (!client || !user?.id) return;
      setisLoading(true);
      try {
        const { calls } = await client.queryCalls({
          sort: [{ field: "starts_at", direction: -1 }], //sorting by the starting dates
          filter_conditions: [
            {
              starts_at: { $exists: true },
            },
          ],
        });
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };
    loadCalls();
  }, [client, user?.id]);
};
