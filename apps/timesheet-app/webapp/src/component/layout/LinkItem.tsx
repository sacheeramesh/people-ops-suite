// Copyright (c) 2025 WSO2 LLC. (https://www.wso2.com).
//
// WSO2 LLC. licenses this file to you under the Apache License,
// Version 2.0 (the "License"); you may not use this file except
// in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import React from "react";
import { Theme, alpha } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  NavLink as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Typography } from "@mui/material";

const Link = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref
) {
  return (
    <RouterLink
      ref={ref}
      {...itemProps}
      role={undefined}
      style={({ isActive }) =>
        isActive ? { background: alpha("#FFFFF", 0.05), color: "#FF7300" } : {}
      }
    />
  );
});

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to, open, theme, isActive } = props;

  return (
    <ListItem
      component={Link}
      to={to}
      sx={{
        borderRadius: 2,
        mb: 1.5,
        "&:hover": {
          background: alpha(theme.palette.common.white, 0.4),
          ...(!open && {
            "& .menu-tooltip": {
              opacity: 1,
              marginLeft: -2,
              visibility: "visible",
              color: (theme) => theme.palette.common.white,
            },
          }),
        },
        ...(isActive && {
          background: alpha(theme.palette.common.white, 0.7),
        }),
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      {icon && (
        <ListItemIcon
          sx={{
            color: (theme) => theme.palette.common.white,
            ...(isActive && {
              color: (theme) => theme.palette.primary.main,
            }),
          }}
        >
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        sx={{
          ml: -2,
          fontSize: 18,
          "& .MuiListItemText-primary": {
            color: (theme) => theme.palette.common.white,
            ...(isActive && {
              color: (theme) => theme.palette.primary.main,
            }),
          },
        }}
        primary={primary}
      />

      <span className="menu-tooltip">
        <Typography variant="body2">{primary}</Typography>
      </span>
    </ListItem>
  );
};

export default ListItemLink;

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  open: boolean;
  isActive: boolean;
  theme: Theme;
}
