import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  	timelineItemContent: {
  		//boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
		borderRadius: 5,
		backgroundColor: '#ffffff',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		padding: 15,
		position: 'relative',
		width: '300px',
		maxWidth: '50%',
		textAlign: 'right',
		'&:after': {
	        background: '#ffffff',
	        content:'" "',
	        //boxShadow: "1px -1px 1px rgba(0, 0, 0, 0.2)",
	        position: 'absolute',
	        top: 'calc(50% - 7.5px)',
	        right: '-7.5px',
	        transform: 'rotate(45deg)',
	        width: 15,
	        height: 15
	    }
	},
	text: {
		fontSize: '16px',
  		lineHeight: '24px',
  		margin: '15px 0',
  		maxWidth: '250 px'
	},
	circle: {
		backgroundColor: '#fff',
		border: '3px solid #F5D594',
		borderRadius: '50%',
		position: 'absolute',
		top: 'calc(50% - 10px)',
		right: '-40px',
		width: '20px',
		height: '20px',
		zIndex: '100'
	},
	tlAlternate: {
		display: 'flex',
  		justifyContent: 'flex-end',
		paddingRight: '30px',
		position: 'relative',
		margin: '10px 0',
		width: '50%',
		'&:nth-child(odd)': {
            alignSelf: 'flex-end',
			justifyContent: 'flex-start',
			paddingLeft: '30px',
			paddingRight: 0,
			'& div':{
				textAlign: 'left',
  				alignItems: 'flex-start',
				'&:after': {
					right: 'auto',
					left: '-7.5px',
					//boxShadow: '-1px 1px 1px rgba(0, 0, 0, 0.2)'
				}
			},
			'& span':{
				right: 'auto',
  				left: '-40px'
			}
        }
	},
	tlRight: {
		display: 'flex',
  		justifyContent: 'flex-end',
		paddingRight: '30px',
		position: 'relative',
		margin: '10px 0',
		width: '90%'
	},
	tlLeft: {
		display: 'flex',
		paddingRight: '30px',
		position: 'relative',
		margin: '10px 0',
		width: '90%',
		alignSelf: 'flex-end',
		justifyContent: 'flex-start',
		paddingLeft: '30px',
		'& div':{
			textAlign: 'left',
			alignItems: 'flex-start',
			'&:after': {
				right: 'auto',
				left: '-7.5px',
				//boxShadow: '-1px 1px 1px rgba(0, 0, 0, 0.2)'
			}
		},
		'& span':{
			right: 'auto',
			left: '-40px'
		}
	},
}))

const TimelineItem = ({ data, type }) => {
	const classes = useStyles();

    return (
        <div className={clsx({ [classes.tlRight]: type === 'right', [classes.tlAlternate]: type === 'alternate', [classes.tlLeft]: type === 'left' })}>
            <div className={classes.timelineItemContent}>
                <p className={classes.text}>{data.text}</p>
                <span className={classes.circle} />
            </div>
        </div>
    )
}

export default TimelineItem