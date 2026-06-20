import type { FilterVariants, Option } from "@/types/DynamicTableTypes"
import type { RowData } from "@tanstack/react-table"

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    editRow: (data: TData) => void
    viewFiles: (data: TData) => void
    deleteRow: (id: number) => void
    option4?: (data: TData) => void
    option5?: (data: TData) => void
    option6?: (data: TData) => void
    option7?: (data: TData) => void
    option8?: (data: TData) => void
  }
  interface ColumnMeta<TData extends RowData, TValue> {
    label?: string
    placeholder?: string
    variant?: FilterVariants
    options?: Option[]
    range?: [number, number]
    unit?: string
    icon?: React.FC<React.SVGProps<SVGSVGElement>>
  }
}
