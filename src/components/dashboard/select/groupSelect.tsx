import React from 'react';
import SelectFormSubmission from './selectComponent';
import { Button, Stack, Typography } from '@mui/material';

const GroupSelect = ({setSelectionHandler}:{setSelectionHandler:()=>void}) => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    // Add more data fields as needed
  ];

  return (
    <>
      <Typography sx={{ marginLeft:'10px',textAlign: 'left', borderBottom: '2px solid black', width: '90px' }}>Select Data</Typography>
      <Stack marginTop={1} display={'flex'} height={'100px'} direction={'row'}>
        <Stack display={'flex'} flexWrap={'wrap'} spacing={4} width={'70%'} direction={'row'}>
          <Stack display={'flex'} flexDirection={'row'} width={'100%'} justifyContent={'space-around'}>
            <SelectFormSubmission options={options} title="AACT" />
            <SelectFormSubmission options={options} title="AGL" />
            <SelectFormSubmission options={options} title="IMPORTS_AIR" />
          </Stack>
          <Stack marginLeft={'0px!important'} display={'flex'} flexDirection={'row'} width={'100%'} justifyContent={'space-around'}>
            <SelectFormSubmission options={options} title="DHL_PACKAGE_EXPRESS" />
            <SelectFormSubmission options={options} title="SOUTBOUND-DUTY" />
            <SelectFormSubmission options={options} title="CURRENCY_MISMATCH" />
          </Stack>
        </Stack>
        <Stack display={'flex'} flexWrap={'wrap'} spacing={4} width={'30%'} direction={'row'}>
          <Button sx={{ height: '40px', borderRadius: '20px' }} onClick={() => {setSelectionHandler()}} variant="outlined">Get Data</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default GroupSelect;
