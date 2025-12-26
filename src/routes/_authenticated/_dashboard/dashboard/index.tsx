import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/_dashboard/dashboard/')({
    staticData: {
        title: 'Dashboard'
    },
    component: RouteComponent
})

function RouteComponent() {
    return <h1 className="text-3xl font-bold text-stone-900">Hello, welcome to your dashboard</h1>
}
