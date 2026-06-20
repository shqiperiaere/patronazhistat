import { PatronazhistTable } from "./components/table/pt-table/patronazhist-table"

export function App() {
  return (
    <div className="flex min-h-screen flex-col gap-4 p-4">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        PETALET E RILINDJES
      </h2>
      <PatronazhistTable />
    </div>
  )
}

export default App
