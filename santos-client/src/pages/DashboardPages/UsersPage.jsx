import {
  Avatar,
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useDeferredValue, useState } from 'react'
import users from '../../assets/users.json'

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1.2,
    minWidth: 190,
    renderCell: (params) => (
      <Stack alignItems="center" direction="row" spacing={1.5} sx={{ height: '100%' }}>
        <Avatar sx={{ bgcolor: '#0f766e' }}>{params.row.firstName[0]}</Avatar>
        <Box>
          <Typography sx={{ fontWeight: 700, color: '#111827' }}>
            {params.row.firstName} {params.row.lastName}
          </Typography>
          <Typography sx={{ color: '#6b7280', fontSize: 12 }}>
            @{params.row.username}
          </Typography>
        </Box>
      </Stack>
    ),
  },
  { field: 'email', headerName: 'Email', flex: 1.25, minWidth: 220 },
  { field: 'role', headerName: 'Role', flex: 0.8, minWidth: 120 },
  { field: 'gender', headerName: 'Gender', flex: 0.8, minWidth: 120 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.8,
    minWidth: 120,
    renderCell: (params) => (
      <Chip
        color={params.value === 'Active' ? 'success' : 'default'}
        label={params.value}
        size="small"
        variant={params.value === 'Active' ? 'filled' : 'outlined'}
      />
    ),
  },
]

function UsersPage() {
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('All')
  const [genderFilter, setGenderFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const deferredSearch = useDeferredValue(search)

  const normalizedSearch = deferredSearch.trim().toLowerCase()

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      normalizedSearch === '' ||
      user.firstName.toLowerCase().includes(normalizedSearch) ||
      user.lastName.toLowerCase().includes(normalizedSearch) ||
      user.email.toLowerCase().includes(normalizedSearch) ||
      user.username.toLowerCase().includes(normalizedSearch)

    const matchesRole = roleFilter === 'All' || user.role === roleFilter
    const matchesGender = genderFilter === 'All' || user.gender === genderFilter
    const matchesStatus = statusFilter === 'All' || user.status === statusFilter

    return matchesSearch && matchesRole && matchesGender && matchesStatus
  })

  return (
    <Stack spacing={3}>
      <Box>
        <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', color: '#6b7280' }}>
          USERS
        </Typography>
        <Typography sx={{ mt: 1, fontFamily: '"Georgia", serif', fontSize: { xs: 32, md: 42 } }}>
          User list and details
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 720, color: '#4b5563' }}>
          This table now supports search and simple dropdown filters for role,
          gender, and active status.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr' },
          alignItems: 'center',
        }}
      >
        <TextField
          label="Search user"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by first name, last name, email, or username"
          value={search}
        />

        <FormControl fullWidth>
          <InputLabel id="role-filter-label">Role</InputLabel>
          <Select
            label="Role"
            labelId="role-filter-label"
            onChange={(event) => setRoleFilter(event.target.value)}
            value={roleFilter}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Editor">Editor</MenuItem>
            <MenuItem value="Viewer">Viewer</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="gender-filter-label">Gender</InputLabel>
          <Select
            label="Gender"
            labelId="gender-filter-label"
            onChange={(event) => setGenderFilter(event.target.value)}
            value={genderFilter}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="status-filter-label">Status</InputLabel>
          <Select
            label="Status"
            labelId="status-filter-label"
            onChange={(event) => setStatusFilter(event.target.value)}
            value={statusFilter}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          borderRadius: 5,
          overflow: 'hidden',
          bgcolor: '#fff',
          boxShadow: '0 18px 40px rgba(15,23,42,0.08)',
        }}
      >
        <DataGrid
          autoHeight
          columns={columns}
          disableColumnMenu
          disableRowSelectionOnClick
          pageSizeOptions={[5, 10]}
          rows={filteredUsers}
          sx={{
            border: 0,
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e5e7eb',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #f1f5f9',
            },
          }}
        />
      </Box>
    </Stack>
  )
}

export default UsersPage
