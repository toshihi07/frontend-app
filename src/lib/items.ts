import { Item } from "@/types/item"

// 環境変数からAPIのベースURLを取得
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export const getItems = async (): Promise<Item[]> => {
  const res = await fetch(`${BASE_URL}/items`)
  return res.json()
}

export const getItem = async (id: string): Promise<Item | undefined> => {
  const res = await fetch(`${BASE_URL}/items/${id}`)
  if (!res.ok) throw new Error("取得に失敗しました")
  return res.json()
}

export const addItem = async (item: Item) => {
  const res = await fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })

  if (!res.ok) {
    throw new Error("追加に失敗しました")
  }
}

export const updateItem = async (id: string, updated: Item) => {
  const res = await fetch(`${BASE_URL}/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updated),
  })

  if (!res.ok) {
    throw new Error("更新に失敗しました")
  }
}

export const deleteItem = async (id: string) => {
  const res = await fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    throw new Error("削除に失敗しました")
  }
}