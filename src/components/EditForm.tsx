"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { updateItem } from "@/lib/items"
import { Item } from "@/types/item"

export default function EditForm({ item }: { item: Item }) {
  const [name, setName] = useState(item.name)
  const [desc, setDesc] = useState(item.description)
  const router = useRouter()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Item</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={() => {
          updateItem(item.id, { id: item.id, name, description: desc })
          router.push("/")
        }}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Save
      </button>
    </main>
  )
}