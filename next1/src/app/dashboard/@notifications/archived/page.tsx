import Card from "@/app/components/card"
import Link from "next/link"


function ArchivedNotifications() {
  return (
    <Card>
        <div>Archived Notifications</div>
        <Link href={'/dashboard'}>Default</Link>
    </Card>
  )
}

export default ArchivedNotifications