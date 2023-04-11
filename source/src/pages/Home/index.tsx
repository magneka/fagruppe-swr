import { Breadcrumb } from "@dnb/eufemia";
import GenericTable from "../../components/genericTable";
import { Product } from "../../types/product";
import { useHome } from "./useHome";

export default function HomePage() {
  const { defaultColumns, products } = useHome();

  const data: Product[] = [{ id: "1", name: "test", price: "3233" }];
  return (
    <>{products && <GenericTable columns={defaultColumns} data={products} />}</>
  );
}
