import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { text_constants } from '../../utils/text_constants';
import { CustomizedTab, TabConatiner } from '../styles/styles';
import { styled } from '@mui/system';
import { Stack } from '@mui/material';
import GroupSelect from './select/groupSelect';
import DisputeDashboard from './dispute';
import CustomTabPanel from './tabs/customTabPanel';


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const { tab_one_title, tab_two_title } = text_constants
const rows:{ type: string; value: string; }[] = [
    { "type": "dispute_type", "value": "CURRENCY_MISMATCH" },
    { "type": "dispute_type", "value": "CURRENCY_MISMATCH" },
    { "type": "dispute_sub_type", "value": "Accessorial" },
    { "type": "manifest_scac", "value": "AACT" },
    { "type": "business_type", "value": "AGL" },
    { "type": "contract_type", "value": "IMPORTS_AIR" },
    { "type": "ship_method", "value": "DHL_PACKAGE_EXPRESS" },
    { "type": "manifest_zone", "value": "2_ZONE_A" },
    { "type": "from_state", "value": "FL" },
    { "type": "from_country_code", "value": "US" },
    { "type": "to_state", "value": "British Columbia" },
    { "type": "to_country_code", "value": "CA" },
    { "type": "pkg_svc_level", "value": "ZZ" },
    { "type": "shipment_account_type", "value": "OUTBOUND-DUTY" },
    { "type": "invoice_currency", "value": "USD" },
    { "type": "country_code", "value": "BR" }
]



const resolutionArray:{  sop:string;
    description:string;
    percentage:number; }[] = [
   {sop:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    percentage:70,
    description:`There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`
   },
   {sop:`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
    percentage:65,
    description:`Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`
   },
]


const Dashboard = () => {
    const [value, setValue] = React.useState(0);
    const [showData, setShowData] = React.useState(false)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const setSelectionHandler = () => {
        setShowData(true)
    }

    return (
        <TabConatiner sx={{
            maxWidth: '80%',
            minWidth: '800px',
        }}>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                    <CustomizedTab label={tab_one_title} {...a11yProps(0)} />
                    <CustomizedTab label={tab_two_title} {...a11yProps(1)} />

                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <TabConatiner>  <GroupSelect setSelectionHandler={setSelectionHandler} /></TabConatiner>

               {showData &&<TabConatiner> <DisputeDashboard resolutionArray={resolutionArray} rows={rows} /> </TabConatiner>}
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {tab_two_title}
            </CustomTabPanel>

        </TabConatiner>
    );
}


export default Dashboard