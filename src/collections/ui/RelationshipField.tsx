'use client'
import { RelationshipField, useField } from '@payloadcms/ui'
import { RelationshipFieldClientComponent } from 'payload'
import React from 'react'

const RelationshipFieldExample: RelationshipFieldClientComponent = (props) => {
  const { value, initialValue } = useField({ path: props.path })

  return (
    <div style={{ marginBottom: '4rem' }}>
      <RelationshipField {...props} />
      <div style={{ marginTop: '1rem' }}>initialValue: {`${initialValue}`}</div>
      <div>value: {`${value}`}</div>
    </div>
  )
}

export default RelationshipFieldExample
