import { useEffect, useState } from "react";

const artificialDelay = 3000;

function useFetch<Data = any>(fetchFn: () => Promise<Response>) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchFn()
        .then(
          (res: Response) =>
            new Promise<Response>((resolve) =>
              setTimeout(() => resolve(res), artificialDelay)
            )
        )
        .then((res: Response) => res.json())
        .then((data: Data) => setData(data))
        .catch((e: Error) => setError(e))
        .finally(() => setLoading(false));
    }
  }, []);

  return { loading, data, error };
}

export { useFetch };
