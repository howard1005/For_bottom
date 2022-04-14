import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import PinnedSubheaderList from './List.js'
import DenseTable from './Table.js'

const useStyles = makeStyles({
    tabs:{
        width:1500,
        height:1000,
        backgroundColor:'black',
    },
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({Information}, {spells}) {
  const [value, setValue] = React.useState(0);
  const tabClasses = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{height:1000, backgroundColor:'lightblue'}}>
      <Box lassName={tabClasses.tabs} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="빌드" {...a11yProps(0)} />
          <Tab label="룬" {...a11yProps(1)} />
          <Tab label="카운터" {...a11yProps(3)} />
          <Tab label="아이템" {...a11yProps(4)} />
          <Tab label="스킬" {...a11yProps(5)} />
          <Tab label="트렌드 그래프" {...a11yProps(6)} />
          <Tab label="팁" {...a11yProps(7)} />
          <Tab label={spells} {...a11yProps(8)} />
        </Tabs>
    </Box>
   
      <TabPanel value={value} index={0}>
        <Box clone p ={5} mx={2} my={3}>
        <DenseTable Information={Information} spells = {spells}></DenseTable>
        <br></br>
        <DenseTable Information={Information} spells = {spells}></DenseTable>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>룬</Typography>
            <DenseTable></DenseTable>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>카운터</Typography>
            <DenseTable></DenseTable>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>아이템</Typography>
            <DenseTable></DenseTable>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>스킬</Typography>
            <DenseTable></DenseTable>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>트렌드 그래프</Typography>
            <DenseTable></DenseTable>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>팁</Typography>
            <DenseTable></DenseTable>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography></Typography>
            <DenseTable></DenseTable>
        </Box>
      </TabPanel>
    </Box>
  );
}





