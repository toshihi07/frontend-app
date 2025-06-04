import EditForm from "@/components/EditForm"
import { getItem } from "@/lib/items"

// ✅ 型注釈を外すことで、Next.jsの推論に任せる
export default async function EditPage({ params }: any) {
  const item = await getItem(params.id)

  if (!item) {
    return <div>Item not found</div>
  }

  return <EditForm item={item} />
}