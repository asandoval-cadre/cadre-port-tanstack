import { getAuth } from '@workos/authkit-tanstack-react-start'

export async function getUserRole() {
    const auth = await getAuth()

    if (!auth.user) {
        return null
    }

    return auth.role ?? null
}
