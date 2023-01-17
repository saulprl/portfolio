interface Exception extends Error {
  status: number;
  info: unknown;
}

export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);

  if (!res.ok) {
    const jsonRes = (await res.json()) as Exception;
    const error: Exception = {
      name: jsonRes.name,
      message: jsonRes.message,
      status: res.status,
      info: jsonRes,
    };

    throw error;
  }

  return res.json();
};
