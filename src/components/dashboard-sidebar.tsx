import { Link, useRouterState } from '@tanstack/react-router'

import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/components/ui/sidebar'

type SidebarItem = {
    title: string
    to: string
}

export function DashboardSidebar({ items }: { items: Array<SidebarItem> }) {
    const pathname = useRouterState({
        select: (state) => state.location.pathname
    })

    return (
        <Sidebar collapsible="icon">
            <SidebarContent className="pt-16">
                <SidebarGroup>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.to}>
                                <SidebarMenuButton asChild isActive={pathname === item.to}>
                                    <Link to={item.to}>
                                        <span className="font-medium">{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
