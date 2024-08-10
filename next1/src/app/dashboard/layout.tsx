export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications
  }: Readonly<{
    children: React.ReactNode;
    users:React.ReactNode;
    revenue:React.ReactNode;
    notifications:React.ReactNode;
  }>){
    return (
        <>
        <div>{children}</div>
        <div className="flex ">
            <div className="flex flex-col">
                <div>{users}</div>
                <div>{revenue}</div>

            </div>
            <div className="flex flex-1">
             {notifications}
            </div>
        </div>
        </>
    )
  }