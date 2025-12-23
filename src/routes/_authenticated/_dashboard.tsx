import { Outlet, createFileRoute } from '@tanstack/react-router'

import { DashboardSidebar } from '@/components/dashboard-sidebar'
import { DashboardTopbar } from '@/components/dashboard-topbar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export const Route = createFileRoute('/_authenticated/_dashboard')({
    component: RouteComponent
})

const sidebarItems = [{ title: 'Dashboard', to: '/dashboard' }]

function RouteComponent() {
    return (
        <SidebarProvider>
            <DashboardTopbar items={sidebarItems} />
            <div className="flex min-h-screen w-full pt-16">
                <DashboardSidebar items={sidebarItems} />
                <SidebarInset className="bg-stone-50 p-8">
                    <Outlet />
                </SidebarInset>
            </div>
        </SidebarProvider>
    )
}
