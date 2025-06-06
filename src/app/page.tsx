"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { getItems, deleteItem } from "@/lib/items"
import { Item } from "@/types/item"

export default function ItemListPage() {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    getItems().then(setItems).catch((err) => {
      console.error("データ取得失敗", err)
    })
  }, [])

  const handleDelete = async (id: string) => {
    try {
      await deleteItem(id)
      setItems((prev) => prev.filter((item) => item.id !== id))
    } catch (err) {
      alert("削除に失敗しました")
    }
  }

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
                onClick={async () => {
                  if (!item.id) return
                  try {
                    await deleteItem(item.id)
                    location.reload()
                  } catch (err) {
                    console.error("削除失敗:", err)
                  }
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