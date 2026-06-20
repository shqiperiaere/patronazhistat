import { flexRender } from "@tanstack/react-table"
import type { ColumnDef } from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Table as TanstackTable } from "@tanstack/react-table"
import { cn } from "@/lib/utils"

interface DynamicTableProps<
  TData,
> extends React.HTMLAttributes<HTMLDivElement> {
  table: TanstackTable<TData>
  columns: ColumnDef<TData>[]
}

export default function DynamicTable<TData>({
  table,
  columns,
  className,
}: DynamicTableProps<TData>) {
  return (
    <div className={cn("rounded-md border", className)}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    // className="max-w-full overflow-hidden whitespace-nowrap  text-ellipsis"
                    // title={
                    //   header.isPlaceholder
                    //     ? undefined
                    //     : (flexRender(
                    //         header.column.columnDef.header,
                    //         header.getContext()
                    //       ) as string)
                    // }
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="odd:bg-muted/50"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          {table.getFooterGroups().map((footerGroup) => (
            <TableRow key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <TableCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableFooter>
      </Table>
    </div>
  )
}
