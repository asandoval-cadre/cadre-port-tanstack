import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_dashboard/dashboard/admin-settings')({
    staticData: {
        title: 'Admin Settings'
    },
    component: RouteComponent
})

function RouteComponent() {
    return <h1 className="text-3xl font-bold text-stone-900">Admin Settings</h1>
}

