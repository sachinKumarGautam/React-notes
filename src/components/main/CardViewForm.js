import React from 'react'
import Input from '@material-ui/core/Input'

const CardViewForm = () => {
  return (
    <Input
      className={classes.input}
      inputProps={{
        'aria-label': 'Description',
        placeholder: 'add title here'
      }}
    />
  )
}
