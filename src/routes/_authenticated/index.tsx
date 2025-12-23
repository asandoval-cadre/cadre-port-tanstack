import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '@workos/authkit-tanstack-react-start/client'

import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_authenticated/')({ component: App })

function App() {
    const { signOut } = useAuth()

    return (
        <div>
            <div>hello world</div>
            <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
    )
}
