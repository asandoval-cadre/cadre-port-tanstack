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
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
