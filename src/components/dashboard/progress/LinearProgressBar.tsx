import * as React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';
import { useCountUp } from 'use-count-up';

interface LinearProgressType {
   percentage:number
  }
  
const LinearProgressCountUp:React.FC<LinearProgressType> = ({percentage})=> {
  const { value } = useCountUp({
    isCounting: true,
    duration: 5,
    easing: 'linear',
    start: 0,
    end: percentage,
    onComplete: () => ({
      shouldRepeat: false,
      delay: 2,
    }),
  });

  return (
    <LinearProgress
      determinate
      variant="outlined"
      color="neutral"
      size="sm"
      thickness={14}
      value={Number(value!)}
      sx={{
        '--LinearProgress-radius': '20px',
        '--LinearProgress-thickness': '24px',
       
      }}
    >
      <Typography
        level="body-xs"
        fontWeight="xl"
        textColor="common.white"
        sx={{ mixBlendMode: 'difference' }}
      >
        Score… {`${Math.round(Number(value!))}%`}
      </Typography>
    </LinearProgress>
  );
}

export default LinearProgressCountUp