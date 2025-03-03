import React from "react";
import {
  Avatar,
  Badge,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Box
} from "@mui/material";
import { Mail, Face } from "@mui/icons-material";

function DataDisplayComponents() {
  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
      {/* Typography */}
      <Typography variant="h4" gutterBottom>
        Material UI Data Display Example
      </Typography>

      {/* Avatar */}
      <Avatar sx={{ width: 56, height: 56 }} alt="User" src="/static/images/avatar/1.jpg" />
      <Typography variant="body1">User Avatar</Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Badge */}
      <Badge badgeContent={4} color="primary">
        <Mail />
      </Badge>
      <Typography variant="body1">Badge Example</Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Chip */}
      <Chip label="React" color="primary" sx={{ margin: "5px" }} />
      <Chip label="JavaScript" color="secondary" sx={{ margin: "5px" }} />
      <Typography variant="body1">Chip Example</Typography>

      <Divider sx={{ margin: "20px 0" }} />

      {/* List */}
      <Typography variant="h6">List Example</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" secondary="Secondary Text" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" secondary="Secondary Text" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 3" secondary="Secondary Text" />
        </ListItem>
      </List>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Table */}
      <Typography variant="h6">Table Example</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>30</TableCell>
              <TableCell>USA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Anna</TableCell>
              <TableCell>28</TableCell>
              <TableCell>UK</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mike</TableCell>
              <TableCell>35</TableCell>
              <TableCell>Canada</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ margin: "20px 0" }} />

      {/* Tooltip */}
      <Tooltip title="Delete">
        <IconButton>
          <Face />
        </IconButton>
      </Tooltip>
      <Typography variant="body1">Tooltip Example</Typography>
    </Box>
  );
}

export default DataDisplayComponents;
