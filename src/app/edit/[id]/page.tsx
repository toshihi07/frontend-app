// app/edit/[id]/page.tsx
import EditForm from "@/components/EditForm"
import { getItem } from "@/lib/items"
import { notFound } from "next/navigation"

export default async function EditItemPage({ params }: { params: { id: string } }) {
  try {
    const item = await getItem(params.id)
    if (!item) return notFound()

    return <EditForm item={item} />
  } catch (e) {
    console.error(e)
    return notFound()
  }
}