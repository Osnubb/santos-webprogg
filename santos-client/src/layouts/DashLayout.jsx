import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import GroupRoundedIcon from '@mui/icons-material/GroupRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const drawerWidth = 272

const navItems = [
  { label: 'Overview', to: '/dashboard', icon: <DashboardRoundedIcon /> },
  { label: 'Reports', to: '/dashboard/reports', icon: <AssessmentRoundedIcon /> },
  { label: 'Users', to: '/dashboard/users', icon: <GroupRoundedIcon /> },
]

function DrawerContent({ onNavigate }) {
  return (
    <Box
      sx={{
        height: '100%',
        background:
          'linear-gradient(180deg, #0f172a 0%, #111827 38%, #1f2937 100%)',
        color: '#fff',
      }}
    >
      <Box sx={{ px: 3, py: 4 }}>
        <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.2em' }}>
          LAB ACTIVITY 5
        </Typography>
        <Typography
          sx={{
            mt: 1.5,
            fontFamily: '"Georgia", serif',
            fontSize: 30,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Santos Dashboard
        </Typography>
        <Typography sx={{ mt: 1.5, color: 'rgba(255,255,255,0.72)', fontSize: 14 }}>
          MUI overview, charts, and users table for INF 233.
        </Typography>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      <List sx={{ px: 1.5, py: 2 }}>
        {navItems.map((item) => (
          <ListItemButton
            component={NavLink}
            key={item.to}
            onClick={onNavigate}
            sx={{
              borderRadius: 3,
              mb: 1,
              color: 'rgba(255,255,255,0.78)',
              '&.active': {
                backgroundColor: '#fbbf24',
                color: '#111827',
                '& .MuiListItemIcon-root': { color: '#111827' },
              },
            }}
            to={item.to}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 42 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontWeight: 700 }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
}

function DashLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleToggle = () => {
    setMobileOpen((open) => !open)
  }

  const handleClose = () => {
    setMobileOpen(false)
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f3f4f6' }}>
      <AppBar
        color="inherit"
        elevation={0}
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          bgcolor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <Toolbar sx={{ minHeight: 72 }}>
          <IconButton
            edge="start"
            onClick={handleToggle}
            sx={{ display: { lg: 'none' }, mr: 2 }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Box>
            <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.18em' }}>
              DASHBOARD AREA
            </Typography>
            <Typography
              sx={{ fontFamily: '"Georgia", serif', fontSize: 26, lineHeight: 1.1 }}
            >
              Analytics and user management
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
        <Drawer
          ModalProps={{ keepMounted: true }}
          onClose={handleToggle}
          open={mobileOpen}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
          }}
          variant="temporary"
        >
          <DrawerContent onNavigate={handleClose} />
        </Drawer>
        <Drawer
          open
          sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              borderRight: '1px solid #1f2937',
            },
          }}
          variant="permanent"
        >
          <DrawerContent />
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 }, mt: 9 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default DashLayout
