import { Item } from "@/types/item"

let items: Item[] = [
  { id: "1", name: "Test Item", description: "This is a sample item." }
]

export const getItems = (): Item[] => [...items]


export const getItem = async (id: string) => {
  return items.find((item) => item.id === id)
}

export const addItem = (item: Item) => {
  items.push(item)
}

export const updateItem = (id: string, updated: Item) => {
  const index = items.findIndex((item) => item.id === id)
  if (index !== -1) {
    items[index] = updated
  }
}

export const deleteItem = (id: string) => {
  items = items.filter((item) => item.id !== id)
}
