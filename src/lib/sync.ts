import { createServerFn } from '@tanstack/react-start'
import type { User } from '@workos-inc/node'

import { prisma } from '@/lib/db'
import { workos } from '@/lib/workos'

export const syncUser = createServerFn({ method: 'POST' })
    .inputValidator((data: User) => data)
    .handler(async ({ data }) => {
        await prisma.user.upsert({
            where: {
                workosId: data.id
            },
            update: {
                email: data.email,
                fullName: data.firstName + ' ' + data.lastName,
                profilePictureUrl: data.profilePictureUrl
            },
            create: {
                workosId: data.id,
                email: data.email,
                fullName: data.firstName + ' ' + data.lastName,
                profilePictureUrl: data.profilePictureUrl
            }
        })
    })

export const syncOrganization = createServerFn({ method: 'POST' })
    .inputValidator((data: string) => data)
    .handler(async ({ data }) => {
        const existingOrg = await prisma.organization.findUnique({
            where: {
                workosId: data
            }
        })

        if (!existingOrg) {
            const workosOrg = await workos.organizations.getOrganization(data)

            await prisma.organization.create({
                data: {
                    workosId: workosOrg.id,
                    name: workosOrg.name
                }
            })
        }
    })
