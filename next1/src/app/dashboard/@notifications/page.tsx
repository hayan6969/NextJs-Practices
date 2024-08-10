import Card from "@/app/components/card"
import Link from "next/link"


function Notifications() {
  return (
    <Card>
        <div>Notifications</div>
        <Link href={'/dashboard/archived'}>Archived</Link>
    </Card>
  )
}

export default Notifications