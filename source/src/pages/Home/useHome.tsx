import { Button } from "@dnb/eufemia";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { useChargeItems } from "../../api/useProductData";
import { Product } from "../../types/product";

export const useHome = () => {
  const [queryParamsString, setQueryParamsString] = useState<string>("");
  const onDeleteRowClick = (deleteItem: Product) => {};
  const { products } = useChargeItems(true, queryParamsString);

  const defaultColumns: ColumnDef<Product>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "id",
      header: "",
      enableSorting: false,
      cell: (info) => (
        <>
          <Button
            icon="close"
            on_click={() => onDeleteRowClick?.(info.row.original)}
          />
        </>
      ),
    },
  ];

  return {
    defaultColumns,
    products,
  };
};
