import { createFileRoute, redirect } from '@tanstack/react-router'
import { getAuth, getSignInUrl } from '@workos/authkit-tanstack-react-start'

export const Route = createFileRoute('/_authenticated')({
    loader: async ({ location }) => {
        const auth = await getAuth()

        if (!auth.user) {
            const signInUrl = await getSignInUrl({
                data: { returnPathname: location.pathname }
            })
            throw redirect({ href: signInUrl })
        }

        return { user: auth.user, role: auth.role }
    }
})
