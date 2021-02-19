import React from 'react';
import TimelineItem from './TimelineItem'
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  tcAlternate: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: '40px 0',
    '&:after': {
        background: '#F5D594',
        content:'""',
        position: 'absolute',
        left: 'calc(50% - 2px)',
        width: 4,
        height: '100%'
    }
  },
  tcRight: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: '40px 0',
    '&:after': {
        background: '#F5D594',
        content:'""',
        position: 'absolute',
        left: 'calc(90% - 2px)',
        width: 4,
        height: '100%'
    }
  },
  tcLeft: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    margin: '40px 0',
    '&:after': {
        background: '#F5D594',
        content:'""',
        position: 'absolute',
        left: 'calc(10% - 2px)',
        width: 4,
        height: '100%'
    }
  },
}))

const TimelineContainer = (props) => {
    const classes = useStyles();
    const { timelineData, type } = props

    return (
    		<div>
    			{(timelineData.length > 0) && 
    		        <div className={clsx({ [classes.tcRight]: type === 'right', [classes.tcAlternate]: type === 'alternate', [classes.tcLeft]: type === 'left' })}>
    		            {timelineData.map((data, idx) => (
    		                <TimelineItem data={data} type={type} key={idx} />
    		            ))}
    		        </div>
    		    }
    	    </div>
    )
}

export default TimelineContainer