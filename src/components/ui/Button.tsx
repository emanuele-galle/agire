import Link from 'next/link'

type ButtonProps = {
  href?: string
  variant?: 'primary' | 'outline'
  children: React.ReactNode
  className?: string
  external?: boolean
}

export function Button({ href, variant = 'primary', children, className = '', external }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors'
  const variants = {
    primary: 'bg-black text-white hover:bg-neutral-800',
    outline: 'border border-black text-black hover:bg-black hover:text-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return <button className={classes}>{children}</button>
}
