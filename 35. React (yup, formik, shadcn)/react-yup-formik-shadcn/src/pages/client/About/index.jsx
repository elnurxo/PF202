import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="font-sans">
      <section className="bg-blue-600 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Code Academy
          </h1>
          <p className="text-lg md:text-xl">
            Empowering learners with practical and modern coding skills.
          </p>
        </div>
      </section>

      <section id="tabs">
        <Box sx={{ width: "100%", margin: "20px auto", textAlign: "center" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Overview" {...a11yProps(0)} />
              <Tab label="Installation" {...a11yProps(1)} />
              <Tab label="Components" {...a11yProps(2)} />
              <Tab label="Examples" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <h1 className="text-xl font-bold">About Chakra UI</h1>
            <p className="text-gray-400">
              Chakra UI is a simple, modular and accessible component library
              that gives you the building blocks you need to build your React
              applications.
            </p>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <h1 className="text-xl font-bold">Installation Guide</h1>
            <p className="text-md text-gray-400">
              Get started with Chakra UI in your React project
            </p>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Item Three
          </CustomTabPanel>
        </Box>
      </section>

      <section className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
          <p className="mb-4">
            Code Academy is a modern online education platform focused on
            teaching web development skills that are in high demand. Our mission
            is to make coding accessible and enjoyable for everyone.
          </p>
          <p className="mb-4">
            Whether you're just getting started or looking to advance your
            career, our expertly crafted courses and hands-on projects help you
            gain the confidence and experience to thrive in the tech industry.
          </p>
          <p>
            With a community of passionate instructors and learners, we aim to
            support you at every step of your learning journey.
          </p>
        </div>
      </section>
    </div>
  );
}
