import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import InfoIcon from '@material-ui/icons/Info'
import green from '@material-ui/core/colors/green'
import amber from '@material-ui/core/colors/amber'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import SnackbarContent from '@material-ui/core/SnackbarContent'

const styles1 = theme => ({
  add: {
    backgroundColor: green[600]
  },
  delete: {
    backgroundColor: amber[700]
  },
  update: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
})

const GetIcon = ({ name, className }) => {
  switch (name) {
    case 'add':
      return <CheckCircleIcon className={className} />

    case 'delete':
      return <InfoIcon className={className} />

    case 'update':
      return <InfoIcon className={className} />

    default:
      return <CheckCircleIcon className={className} />
  }
}

class SnackbarAction extends React.Component {
  render () {
    const { msg, snackBarEvent, classes, className } = this.props
    return (
      <div>
        <Snackbar
          // className={classNames(classes[snackBarEvent])}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={this.props.open}
          onClose={this.props.onClose}
          autoHideDuration={3000}
        >
          <SnackbarContent
            className={classNames(classes[snackBarEvent])}
            aria-describedby='client-snackbar'
            message={
              <span id='client-snackbar' className={classes.message}>
                <GetIcon
                  name={snackBarEvent}
                  className={classNames(classes.icon, classes.iconVariant)}
                />
                {'One card is '}
                {snackBarEvent === 'add'
                  ? snackBarEvent + 'ed'
                  : snackBarEvent + 'd'}
              </span>
            }
          />
        </Snackbar>
      </div>
    )
  }
}

export default withStyles(styles1)(SnackbarAction)
