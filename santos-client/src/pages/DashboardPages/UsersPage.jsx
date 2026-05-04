import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1.2,
    minWidth: 180,
    renderCell: (params) => (
      <Stack alignItems="center" direction="row" spacing={1.5} sx={{ height: '100%' }}>
        <Avatar sx={{ bgcolor: '#0f766e' }}>{params.row.name[0]}</Avatar>
        <Typography sx={{ fontWeight: 700, color: '#111827' }}>{params.row.name}</Typography>
      </Stack>
    ),
  },
  { field: 'email', headerName: 'Email', flex: 1.3, minWidth: 220 },
  { field: 'role', headerName: 'Role', flex: 0.8, minWidth: 130 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 0.7,
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

const rows = [
  { id: 1, name: 'Regalado Santos Jr.', email: 'regaladosnts@gmail.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Andrea Cruz', email: 'andrea.cruz@example.com', role: 'Editor', status: 'Active' },
  { id: 3, name: 'Paolo Reyes', email: 'paolo.reyes@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'Mika Dela Torre', email: 'mika.torre@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Liam Navarro', email: 'liam.navarro@example.com', role: 'Viewer', status: 'Active' },
]

function UsersPage() {
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
          This table uses MUI X Data Grid with sample rows in preparation for
          the next activity.
        </Typography>
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
          pageSizeOptions={[5]}
          rows={rows}
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
