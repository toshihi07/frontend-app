"use client"

import Link from "next/link"
import { getItems, deleteItem } from "@/lib/items"

export default function ItemListPage() {
  const items = getItems()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Item List</h1>
      <Link href="/create" className="text-blue-500 underline">＋ Add Item</Link>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className="border p-2 flex justify-between items-center">
            <div>
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </div>
            <div className="space-x-2">
              <Link href={`/edit/${item.id}`} className="text-blue-600 underline">Edit</Link>
              <button
                onClick={() => {
                  deleteItem(item.id)
                  location.reload()
                }}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}