// app/edit/[id]/page.tsx
export const dynamic = 'force-dynamic'

import EditForm from "@/components/EditForm"
import { getItem } from "@/lib/items"
import { notFound } from "next/navigation"

type PageProps = {
  params: {
    id: string
  }
}

export default async function EditItemPage({ params }: PageProps) {
  try {
    const item = await getItem(params.id)
    if (!item) return notFound()

    return <EditForm item={item} />
  } catch (e) {
    console.error(e)
    return notFound()
  }
}
