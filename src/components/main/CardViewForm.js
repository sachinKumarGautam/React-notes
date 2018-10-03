import React from 'react'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  input: {},
  cardWrapper: {
    flexDirection: 'column',
    display: 'flex'
  }
})

const CardViewForm = ({ classes }) => {
  return (
    <div className={classes.cardWrapper}>
      <Input
        className={classes.input}
        required
        inputProps={{
          'aria-label': 'Description',
          placeholder: 'Add card title'
        }}
      />
      <Input
        className={classes.input}
        multiline
        required
        inputProps={{
          'aria-label': 'Description',
          placeholder: 'Add card content here'
        }}
      />
    </div>
  )
}

export default withStyles(styles)(CardViewForm)
