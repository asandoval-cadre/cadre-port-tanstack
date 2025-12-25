import { createFileRoute } from '@tanstack/react-router'
import { handleCallbackRoute } from '@workos/authkit-tanstack-react-start'

import { syncOrganization, syncUser } from '@/lib/auth/sync'

export const Route = createFileRoute('/callback')({
    server: {
        handlers: {
            GET: handleCallbackRoute({
                onSuccess: async ({ user, organizationId }) => {
                    await syncUser({ data: user })

                    if (organizationId) {
                        await syncOrganization({ data: organizationId })
                    }
                }
            })
        }
    }
})
