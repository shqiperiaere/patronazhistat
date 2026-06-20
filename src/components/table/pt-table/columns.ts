import type { ColumnDef } from "@tanstack/react-table"

export type PersonType = {
  Emri: string
  Mbiemri: string
  Atesi: string
  Datelindje: string
  QV: number
  "Lista Nr": number
  Tel: string
  Emigrant: string
  "Country Emigrant": string
  "I sigurt": string
  Koment: string
  Patronazhisti: string
  Preferenca: string
  "Census2013 Preferenc": string
  "Census2013 Siguria": number
  Vendlindja: string
  Kompania: string
  "Kod Banese": number
}

export const columns: ColumnDef<PersonType>[] = [
  {
    header: "Emri",
    accessorKey: "Emri",

    meta: {
      label: "Emri",
      variant: "text",
      placeholder: "Kërko sipas Emrit",
    },
    enableColumnFilter: true,
  },
  {
    header: "Mbiemri",
    accessorKey: "Mbiemri",
    meta: {
      label: "Mbiemri",
      variant: "text",
      placeholder: "Kërko sipas Mbiemrit",
    },
    enableColumnFilter: true,
  },
  {
    header: "Atësia",
    accessorKey: "Atesi",
    meta: { label: "Atësia" },
  },
  {
    header: "Datëlindja",
    accessorKey: "Datelindje",
    meta: { label: "Datëlindja" },
  },
  {
    header: "QV",
    accessorKey: "QV",
    meta: { label: "QV" },
  },
  {
    header: "Lista Nr",
    accessorKey: "Lista Nr",
    meta: { label: "Lista Nr" },
  },
  {
    header: "Telefoni",
    accessorKey: "Tel",
    meta: {
      label: "Telefoni",
      variant: "text",
      placeholder: "Kërko sipas telefonit",
    },
    enableColumnFilter: true,
  },
  {
    header: "Emigrant",
    accessorKey: "Emigrant",
    meta: {
      label: "Emigrant",
      variant: "select",
      options: [
        { label: "Po", value: "Po" },
        { label: "Jo", value: "Jo" },
      ],
    },
    enableColumnFilter: true,
  },
  {
    header: "Shteti Emigrant",
    accessorKey: "Country Emigrant",
    meta: { label: "Shteti Emigrant" },
  },
  {
    header: "I Sigurt",
    accessorKey: "I sigurt",
    meta: {
      label: "I Sigurt",
      variant: "select",
      options: [
        { label: "Po", value: "Po" },
        { label: "Jo", value: "Jo" },
      ],
    },
    enableColumnFilter: true,
  },
  {
    header: "Koment",
    accessorKey: "Koment",
    meta: { label: "Koment" },
  },
  {
    header: "Patronazhisti",
    accessorKey: "Patronazhisti",
    meta: {
      label: "Patronazhisti",
      variant: "text",
      placeholder: "Kërko patronazhistin",
    },
    enableColumnFilter: true,
  },
  {
    header: "Preferenca",
    accessorKey: "Preferenca",
    meta: {
      label: "Preferenca",
      variant: "select",
      options: [
        { label: "PS", value: "PS" },
        { label: "PD", value: "PD" },
        { label: "Tjetër", value: "TJETER" },
      ],
    },
    enableColumnFilter: true,
  },
  {
    header: "Preferenca 2013",
    accessorKey: "Census2013 Preferenc",
    meta: {
      label: "Preferenca 2013",
    },
  },
  {
    header: "Siguria 2013",
    accessorKey: "Census2013 Siguria",
    meta: {
      label: "Siguria 2013",
    },
  },
  {
    header: "Vendlindja",
    accessorKey: "Vendlindja",
    meta: { label: "Vendlindja" },
  },
  {
    header: "Kompania",
    accessorKey: "Kompania",
    meta: { label: "Kompania" },
  },
  {
    header: "Kod Banese",
    accessorKey: "Kod Banese",
    meta: { label: "Kod Banese" },
  },
]
