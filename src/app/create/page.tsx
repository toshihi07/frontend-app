"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { addItem } from "@/lib/items"

export default function CreatePage() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const router = useRouter()

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add Item</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => {
          addItem({ id: Date.now().toString(), name, description: desc })
          router.push("/")
        }}
      >
        Save
      </button>
    </main>
  )
}