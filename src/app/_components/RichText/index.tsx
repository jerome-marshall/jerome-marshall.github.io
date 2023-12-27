'use client'

import React from 'react'

import { type CustomRenderers, Serialize as SerializeContent, type Node } from './Serialize'

import classes from './index.module.scss'

export const RichText: React.FC<{
  className?: string
  content: Node[]
  customRenderers?: CustomRenderers
}> = ({ className, content, customRenderers }) => {
  if (!content) {
    return null
  }

  return (
    <div className={[classes.richText, className].filter(Boolean).join(' ')}>
      <SerializeContent content={content} customRenderers={customRenderers} />
    </div>
  )
}
