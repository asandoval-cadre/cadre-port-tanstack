import { Link, useLoaderData, useRouterState } from '@tanstack/react-router'
import { Settings as SettingsIcon } from 'lucide-react'

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/components/ui/sidebar'

type SidebarItem = {
    title: string
    to: string
}

export function DashboardSidebar({ items }: { items: Array<SidebarItem> }) {
    const { role } = useLoaderData({ from: '/_authenticated' })
    const pathname = useRouterState({
        select: (state) => state.location.pathname
    })

    const canSeeAdminSettings = role === 'system-admin' || role === 'pod-manager'
    const isAdminSettingsActive = pathname === '/dashboard/admin-settings' || pathname.startsWith('/dashboard/admin-settings/')

    return (
        <Sidebar collapsible="icon">
            <SidebarContent className="pt-16">
                <SidebarGroup>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.to}>
                                <SidebarMenuButton asChild isActive={pathname === item.to}>
                                    <Link to={item.to}>
                                        <div className="flex items-center gap-2">
                                            <img src="/cadre-icon.svg" alt="Cadre AI" width={16} height={16} className="h-[16px] w-[16px]" />
                                            <span className="truncate font-medium transition-all duration-200 group-data-[collapsed=true]/sidebar:hidden data-[state=closed]:opacity-0 data-[state=open]:opacity-100">
                                                {item.title}
                                            </span>
                                        </div>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                {canSeeAdminSettings ? (
                    <SidebarGroup className="mt-auto">
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild isActive={isAdminSettingsActive}>
                                    <Link to="/dashboard/admin-settings">
                                        <SettingsIcon className="h-4 w-4" />
                                        <span className="truncate font-medium">Admin Settings</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                ) : null}
            </SidebarContent>
            <SidebarFooter className="p-4 group-data-[state=collapsed]:hidden">
                <img src="/cadre-logo.png" alt="Cadre logo" width={120} height={40} className="h-auto max-w-[120px]" />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
