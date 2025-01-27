'use client'
import { JoinFieldClientComponent } from 'payload'
import React from 'react'
import { JoinField, useField } from '@payloadcms/ui'

const JoinFieldExample: JoinFieldClientComponent = (props) => {
  const { value, initialValue } = useField({ path: props.path })
  return (
    <div>
      <JoinField {...props} />
      <div>initialValue: {`${JSON.stringify(initialValue)}`}</div>
      <div>value: {`${value}`}</div>
    </div>
  )
}

export default JoinFieldExample
