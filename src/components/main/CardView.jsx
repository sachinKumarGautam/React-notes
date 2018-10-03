import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import CardViewForm from './CardViewForm'

function Transition (props) {
  return <Slide direction='up' {...props} />
}

const styles = theme => ({
  cardViewWrapper: {
    minHeight: '300px',
    minWidth: '500px'
  },
  dialogTitle: {
    textAlign: 'center'
  }
})

class CardView extends React.Component {
  addCardToList = () => {
    this.props.closeCardView()
  }

  render () {
    const { classes } = this.props
    return (
      <Dialog
        open={this.props.open}
        TransitionComponent={Transition}
        keepMounted
        PaperProps={{
          paper: classes.cardViewWrapper
        }}
        scroll={'body'}
        onClose={this.props.handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle
          className={classes.dialogTitle}
          id='alert-dialog-slide-title'
        >
          {'Add new card'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Add new content
          </DialogContentText>
          <CardViewForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.closeCardView} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.addCardToList} color='primary'>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withStyles(styles)(CardView)
