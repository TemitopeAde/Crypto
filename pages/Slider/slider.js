import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: '#F0B90B',
  },
  margin: {
    height: theme.spacing(5),
  },
  
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 25,
      label: '25%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 75,
      label: '75%',
    },
    {
        value: 100,
        label: 'MAX',
    },
  ];



const PrettoSlider = withStyles({
  root: {
    color: '#F0B90B',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  markLabel: {
    top: '-40px',
  }
})(Slider);



function valuetext(value) {
    return `${value}%`;
  }

export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography gutterBottom></Typography>
      <PrettoSlider 
        valueLabelDisplay="auto" 
        defaultValue={0}  
        step={25} 
        // valueLabelDisplay="on"
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        marks={marks}
        />
      <div className={classes.margin} />     
    </div>
  );
}