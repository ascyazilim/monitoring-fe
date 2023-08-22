import React from "react";
import { styled } from "@mui/material/styles"; // styled eklemeyi unutmayın
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { GiHealthNormal } from "react-icons/gi";
import { FaNotesMedical, FaStethoscope, FaListUl } from "react-icons/fa";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // ThemeProvider eklemeyi unutmayın
import { Link } from "react-router-dom";

const drawerWidth = 240;

const theme = createTheme(); // Tema nesnesini oluşturun

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  // styled ile tema bilgisini alın
  width: drawerWidth,
  flexShrink: 0,
}));

const StyledList = styled(List)(({ theme }) => ({
  // styled ile tema bilgisini alın
  backgroundColor: theme.palette.primary.main,
  color: "white",
  width: drawerWidth,
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  // styled ile tema bilgisini alın
  color: "inherit",
}));

function Sidebar() {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* ThemeProvider ekleyin */}
      <StyledDrawer
        variant="permanent"
        classes={{
          paper: "drawerPaper", // classes.paper değeri burada string olarak kullanılır
        }}
      >
        <div className="drawerHeader" />
        <Divider />
        <StyledList>
          <StyledListItem button components={Link} to="/hasta">
            <ListItemIcon>
              <GiHealthNormal />
            </ListItemIcon>
            <ListItemText primary="Hasta Bilgisi" />
          </StyledListItem>
          <StyledListItem button>
            <ListItemIcon>
              <FaNotesMedical />
            </ListItemIcon>
            <ListItemText primary="Muayene Bilgisi" />
          </StyledListItem>
          <StyledListItem button>
            <ListItemIcon>
              <FaStethoscope />
            </ListItemIcon>
            <ListItemText primary="Tani Bilgisi" />
          </StyledListItem>
          <StyledListItem button>
            <ListItemIcon>
              <FaListUl />
            </ListItemIcon>
            <ListItemText primary="Tani Bilgisi Listesi" />
          </StyledListItem>
        </StyledList>
      </StyledDrawer>
    </ThemeProvider>
  );
}

export default Sidebar;
