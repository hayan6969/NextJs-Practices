import React from "react";
import Login from "./@login/page";

export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
  }: Readonly<{
    children: React.ReactNode;
    users:React.ReactNode;
    revenue:React.ReactNode;
    notifications:React.ReactNode;
    login:React.ReactNode;
  }>){
    const isLoggedIn=false;
    return isLoggedIn ? (
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
    ):
    (
        login
    )
  }