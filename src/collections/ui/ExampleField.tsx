'use client'
import { TextFieldClientComponent } from 'payload'
import React from 'react'
import { TextField, useField } from '@payloadcms/ui'

const ExampleField: TextFieldClientComponent = (props) => {
  const { value, initialValue } = useField<string>({ path: props.path })
  return (
    <>
      <TextField {...props} />
      <div>intialValue: {initialValue}</div>
      <div>value: {value}</div>
    </>
  )
}

export default ExampleField
