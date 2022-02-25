import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from '../style/Home.module.css';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader
  } from "@material-ui/core";

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="빌드" {...a11yProps(0)} />
          <Tab label="룬" {...a11yProps(1)} />
          <Tab label="카운터" {...a11yProps(3)} />
          <Tab label="아이템" {...a11yProps(4)} />
          <Tab label="스킬" {...a11yProps(5)} />
          <Tab label="트렌드 그래프" {...a11yProps(6)} />
          <Tab label="팁" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box clone p ={5} mx={2} my={3}>
      <Card>
      <CardHeader
        title="빌드"
        
      />
      <CardContent>
        <div>
          <Typography variant="h3" color="textPrimary">
            키스톤
          </Typography>
          <Typography variant="h6" color="textSecondary">
            룬
          </Typography>
        </div>
        <ul>
          {["skill1", "skill2", "skill3"].map(
            (line) => (
              <Typography
                component="li"
                variant="subtitle1"
                align="center"
                key={line}
              >
                {line}
              </Typography>
            )
          )}
        </ul>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="primary">
          Sign up for free
        </Button>
      </CardActions>
    </Card>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>룬</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>카운터</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>아이템</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>스킬</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>트렌드 그래프</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box clone p ={5} mx={2} my={3}>
            <Typography>팁</Typography>
        </Box>
      </TabPanel>
    </Box>
  );
}
