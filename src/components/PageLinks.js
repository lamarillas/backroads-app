import React from 'react'
import { pageLinks } from '../data'
import { PageLink } from './PageLink'

export const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {
        pageLinks.map(link => <PageLink link={link} itemClass={itemClass} />)
      }
    </ul>
  )
}
