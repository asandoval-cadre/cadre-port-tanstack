import { useRouterState } from '@tanstack/react-router'
import { useAuth } from '@workos/authkit-tanstack-react-start/client'
import { LogOutIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function DashboardTopbar() {
    const { signOut } = useAuth()

    const routeTitle = useRouterState({
        select: (state) => {
            const matchWithTitle = [...state.matches].reverse().find((m) => (m.staticData as { title?: string } | undefined)?.title)
            return (matchWithTitle?.staticData as { title?: string } | undefined)?.title
        }
    })

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4">
            <div className="flex items-center gap-3">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold text-black">Cadre AI</h1>
            </div>

            <span className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-stone-700">{routeTitle}</span>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => signOut()}>
                            <LogOutIcon className="h-4 w-4" />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Sign Out</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </header>
    )
}
