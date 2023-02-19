import { twMerge, twJoin } from 'tailwind-merge'

export function clsx(...args: Parameters<typeof twJoin>) {
    return twMerge(twJoin(...args))
}
