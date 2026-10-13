import { useInView } from '../hooks'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children }) {
  const [setNode, inView] = useInView()

  return (
    <Tag
      ref={setNode}
      className={`reveal${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
