'use client'
import { TextField, useField } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'
import React from 'react'

const ExampleComponent: TextFieldClientComponent = (props) => {
  const { formInitializing, formProcessing, formSubmitted } = useField({ path: props.path })

  return (
    <>
      <TextField {...props} />
      <div style={{ color: formInitializing ? 'green' : 'red' }}>
        formInitializing: {formInitializing.toString()}
      </div>
      <div style={{ color: formProcessing ? 'green' : 'red' }}>
        formProcessing: {formProcessing.toString()}
      </div>
      <div style={{ color: formSubmitted ? 'green' : 'red' }}>
        formSubmitted: {formSubmitted.toString()}
      </div>
    </>
  )
}

export default ExampleComponent
