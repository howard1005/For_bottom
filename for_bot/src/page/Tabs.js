import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
        빌드
      </TabPanel>
      <TabPanel value={value} index={1}>
        룬
      </TabPanel>
      <TabPanel value={value} index={2}>
        카운터
      </TabPanel>
      <TabPanel value={value} index={3}>
        아이템
      </TabPanel>
      <TabPanel value={value} index={4}>
        스킬
      </TabPanel>
      <TabPanel value={value} index={5}>
        트렌드 그래프
      </TabPanel>
      <TabPanel value={value} index={6}>
        팁
      </TabPanel>
    </Box>
  );
}
