export interface ILink {
  href: string
  label: string
}

export type TLinks = Array<ILink>

export default [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Blog',
    href: '/blog'
  }
]
