import { LogOutIcon } from 'lucide-react'
import { useAuth } from '@workos/authkit-tanstack-react-start/client'

import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export function DashboardTopbar() {
    const { signOut } = useAuth()

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4">
            <div className="flex items-center gap-3">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold text-black">Cadre AI</h1>
            </div>

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
