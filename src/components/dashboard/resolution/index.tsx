import { Box, Card, CardContent, Stack, Tooltip, Typography } from '@mui/joy'
import React from 'react'
import LinearProgressCountUp from '../progress/LinearProgressBar'

interface ResolutionProps {
    sop:string;
    description:string;
    percentage:number;
  } 

export const Resolution:React.FC<ResolutionProps> = ({description,percentage,sop}) => {
   
    return (
        <Stack marginTop={'10px!important'} flexDirection={'row'} spacing={6} width={'95%'} >
            <Box sx={{ minWidth: '800px', maxWidth: '1100px' }}>
                <Card variant="soft">
                    <CardContent>
                        <Typography textAlign={'left'} level="title-md">Posible Resolution</Typography>
                        <Typography textAlign={'left'} >{description}</Typography>
                        <Tooltip title="Reason Score"><LinearProgressCountUp percentage={percentage}/></Tooltip>
                        <Box display={'flex'} textAlign={'left'} marginTop={'10px'} flexDirection={'row'}>
                            <Typography width={'100px'} fontWeight={600} marginRight={'10px'}>SOP</Typography>
                            <Typography> {sop}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    )
}
