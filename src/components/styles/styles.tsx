import { AppBar, Box, Tab, Typography, styled } from "@mui/material";




export const AppBarStyled = styled(AppBar)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    backgroundColor: '#00000063',
    border: '4px solid black',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    position: "relative",

  }));
  
export const HeaderTitle = styled
(Typography)(({ theme }) => ({
    flexGrow: 1,
    color: 'black',
    fontWeight: 600,
  }));


export const CustomizedTab = styled(Tab)(({ theme }) => ({
    textTransform:'capitalize',
    fontWeight:600,
    color:'black',
    fontSize:'large',
    maxWidth:'50%'
  }));

  export const PrimaryContainer = styled(Box)(({theme})=>(
    {
        maxWidth: '100vw', maxHeight: '100vh', minWidth: '1000px', minHeight: '100vh', 
        
    }
  ))


  export const TabConatiner = styled(Box)(({theme})=>({
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    color: '#212B36',
    WebkitTransition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',


    overflow: 'hidden',
    boxShadow: '0 0 2px 0 rgba(145, 158, 171, 0.08), 0 12px 24px -4px rgb(145 158 171 / 32%)',

    position: 'relative',
    zIndex: 0,

    paddingTop: '20px',
    paddingBottom: '20px',
    borderRadius: '16px',
    
marginLeft:'auto',
marginRight:'auto',
marginTop:'30px',
marginBottom:'30px',
  }))


  