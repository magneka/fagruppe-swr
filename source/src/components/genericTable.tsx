import { Table, Tr, Th, Button } from "@dnb/eufemia";
import {
  ColumnDef,
  AccessorFn,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";

export type ColumnDefOverride<T> = Omit<ColumnDef<T>, "accessorFn"> & {
  accessorFn?: AccessorFn<T, any>;
};

type Props<T> = {
  columns: ColumnDefOverride<T>[];
  data: T[];
};
export default function GenericTable<T>({ columns, data }: Props<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    columns: columns as ColumnDef<T>[],
    data: data,
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <Table
      sticky="css-position"
      className="border-2 border-[var(--color-sea-green)] p-4 "
    >
      <thead>
        {
          // Loop over the header rows
          table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {
                // Loop over the headers in each row
                headerGroup.headers.map((header) => (
                  // Apply the header cell props
                  <Th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {header.column.getCanSort() ? (
                          <Button
                            title="Test"
                            variant="tertiary"
                            id={`sortButton_${header.id}`}
                            wrap
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}

                            {{
                              asc: " 🔼",
                              desc: " 🔽",
                            }[header.column.getIsSorted() as string] ?? null}
                          </Button>
                        ) : (
                          ""
                        )}

                        {/* {flexRender(
                                                        header.column.columnDef
                                                            .header,
                                                        header.getContext()
                                                    )}
                                                    
                                                    {{
                                                        asc: " 🔼",
                                                        desc: " 🔽",
                                                    }[
                                                        header.column.getIsSorted() as string
                                                    ] ?? null} */}
                      </div>
                    )}
                  </Th>
                ))
              }
            </Tr>
          ))
        }
      </thead>
      <tbody>
        {
          // Loop over the table rows
          table.getRowModel().rows.map((row) => {
            return (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </Tr>
            );
          })
        }
      </tbody>
    </Table>
  );
}
function useHandleSortState(arg0: {
  column1: { direction: string; active: boolean };
  column2: { direction: string; modes: string[] };
}): { sortState: any; sortHandler: any } {
  throw new Error("Function not implemented.");
}
