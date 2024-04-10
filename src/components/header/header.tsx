
import {  Box, Toolbar} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import logo from "../../icons/gl_logo.png"
import { text_constants } from '../../utils/text_constants';
import { AppBarStyled, HeaderTitle } from '../styles/styles';

  
const header_title = text_constants['header_title']

const AppHeader = () =>
(
    <AppBarStyled>
        <Toolbar>
            <Box flexGrow={0}>
                <Tooltip title="Pavan Pogula">
                    <IconButton href='https://www.linkedin.com/in/pavanreddyp/' target='_blank' sx={{ p: 0 }}>
                        <Avatar alt="Pavan Pogula" src={logo} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box margin={'auto'}>
                <HeaderTitle align='center' variant="h4">
                  {header_title}
                </HeaderTitle>
            </Box>
        </Toolbar>
    </AppBarStyled>
);

export default AppHeader;