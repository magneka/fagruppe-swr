import { Product } from "../types/product";
import { fetcher } from "./fetcher";
import useSWR from "swr";

export function useChargeItems(shouldFetch: boolean, queryParams?: string) {
  const {
    data: products,
    mutate,
    isLoading,
  } = useSWR<Product[]>(
    shouldFetch ? `/products/${queryParams}` : null,
    fetcher,
    {
      revalidateOnFocus: true,
    }
  );

  return {
    products,
    isLoading,
    isError: false,
    mutate,
  };
}
