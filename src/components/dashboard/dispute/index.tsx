import { Box, Stack, Typography } from '@mui/material'

import BasicTable from './BasicTable'
import { Resolution } from '../resolution';


interface DisputeDashboardType {
    rows:{ type: string; value: string; }[]
    resolutionArray:{ sop:string;
        description:string;
        percentage:number;}[];
}

const DisputeDashboard:React.FC<DisputeDashboardType> = ({rows, resolutionArray}) => {
    return (
        <Stack marginLeft={'10px'} spacing={4}>
            <Typography  sx={{textAlign:'left',borderBottom:'2px solid black',width:'60px',marginBottom:'10px'}}>Dispute:</Typography>
            <Stack flexDirection={'row'} spacing={6} marginLeft={'auto'} marginRight={'auto'} justifyContent={'space-between'} width={'95%'}>
                <Box sx={{ minWidth: '300px', maxWidth: '450px' }}>
                    <BasicTable rows={rows.slice(0, 8)} />
                </Box>
                <Box sx={{ marginTop: '0!important', minWidth: '300px', maxWidth: '450px' }}>
                    <BasicTable rows={rows.slice(8, 16)} />
                </Box>
            </Stack>
            <Stack flexDirection={'column'} spacing={6} justifyContent={'space-between'} width={'100%'}>
                <Stack >
            <Box><Typography sx={{textAlign:'left',fontWeight:'600',fontSize:'20px',width:'140px',marginBottom:'10px'}}>Recommendations:</Typography></Box>
            </Stack>
        {
            resolutionArray.map((obj, index)=>(<Resolution description={obj['description']} percentage={obj['percentage']} sop={obj['sop']}/>))
        }   
       
            </Stack>
        </Stack>
    )
}

export default DisputeDashboard