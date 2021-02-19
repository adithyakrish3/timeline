import React from 'react';
import TimelineContainer from './TimelineContainer'

import { makeStyles } from "@material-ui/core/styles";
import DoneIcon from '@material-ui/icons/Done';
import RefreshIcon from '@material-ui/icons/Refresh';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  linkContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  existingLink: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  saveContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 10,
  },
  addContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  createSection: {
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'space-between'
  },
  newButton: {
    border: '1px solid #dddddd',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.8rem',
    marginLeft: 10,
    padding: 5,
    '&:hover': {
      background: '#dddddd',
      color: '#666666'
    }
  },
  root: {
  	padding: theme.spacing(5)
  },
  topMargin: {
  	marginTop: 50
  },
  button: {
    background: '#000000',
    borderRadius: 25,
    color: '#ffffff',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 400,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: 5,
    paddingBottom: 5
  }
}))

let timelineData = [
    {
        text: 'Action 1',
    },
    {
        text: 'Action 2',
    },
    {
        text: 'Action 3',
    },
    {
        text: 'Action 4',
    }
]

const MainContainer = () => {
	const classes = useStyles();
	const [data, setData] = React.useState(timelineData)
	const [action, setAction] = React.useState('')
	const [type, setType] = React.useState('right')

	const handleAddAction = () => {
		const newAction = {
			text: action
		}

		let newData = [...data]
		newData.push(newAction)
		setData(newData)
		setAction('')
	}

	const handleCancelAction = () => {
		setAction('')
	}

	const handleChange = (e) => {
    setAction(e.target.value);
  }

  const handleChooseType = (newType) => {
  	if(type !== newType)
  		setType(newType)
  }

    return (
      <div className={classes.root}>
      	<div className={classes.linkContainer}>
          <div className={classes.addContainer}>
            <div className={classes.createSection}>
							<TextField
								margin="dense"
								id="action"
								fullWidth
								label='Enter action'
								type="text"
								onChange={handleChange}
								value={action}
							/>
							<div className={classes.linkContainer}>
								<span className={classes.addContainer}>
									<DoneIcon className={classes.newButton} onClick={() => handleAddAction()} />
								</span>
								<span className={classes.saveContainer}>
                  <RefreshIcon onClick={() => handleCancelAction()} className={classes.newButton} />
                </span>
              </div>
              <div className={classes.existingLink}>
              	<span className={classes.addContainer}>
              		<span className={classes.button} onClick={() => handleChooseType('left')}>Left</span>
              	</span>
              </div>
              <div className={classes.existingLink}>
              	<span className={classes.addContainer}>
              		<span className={classes.button} onClick={() => handleChooseType('alternate')}>Alternate</span>
              	</span>
              </div>
              <div className={classes.existingLink}>
              	<span className={classes.addContainer}>
              		<span className={classes.button} onClick={() => handleChooseType('right')}>Right</span>
              	</span>
              </div>
						</div>
          </div>
        </div>
        <div className={classes.topMargin}>
        	<TimelineContainer timelineData={data} type={type}/>
        </div>
      </div>
    )
}

export default MainContainer