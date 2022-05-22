export const log = (...args: unknown[]) => console.info.apply(null, [`[${new Date().toLocaleString()}]`, ...args])

export const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ')

export const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout))

export const getPrefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

export function download(filename: string, href: string) {
  const link = document.createElement('a')
  link.download = filename
  link.href = href
  link.click()
}
