import * as React from 'react';
import Button from '@mui/joy/Button';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Stack from '@mui/joy/Stack';

export default function SelectFormSubmission({options, title}:{title:string,options:{value:string,label:string}[] }) {
    const optionsArray = options
  return (
  
      <Stack spacing={2}  alignItems="flex-start">
        <Select
        
          placeholder={title}
          name={title}
          required
          sx={{ minWidth: 200,maxWidth:200 }}
        >
            {
                optionsArray.map((option,index)=>(       <Option key={'index_'+index} value={option.value}>{option.label}</Option>)
            )
            }
   
        </Select>
        
      </Stack>

  );
}
