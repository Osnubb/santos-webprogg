import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded'
import GroupRoundedIcon from '@mui/icons-material/GroupRounded'
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded'
import PaidRoundedIcon from '@mui/icons-material/PaidRounded'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material'

const summaryCards = [
  { label: 'Total Revenue', value: '$48,240', icon: <PaidRoundedIcon />, tone: '#f59e0b' },
  { label: 'Active Users', value: '1,284', icon: <GroupRoundedIcon />, tone: '#0f766e' },
  { label: 'Orders', value: '386', icon: <Inventory2RoundedIcon />, tone: '#2563eb' },
  { label: 'Avg. Session', value: '18 min', icon: <AccessTimeFilledRoundedIcon />, tone: '#7c3aed' },
]

const activity = [
  { label: 'Dashboard completion', value: 84 },
  { label: 'Reports readiness', value: 72 },
  { label: 'Users table setup', value: 91 },
]

function DashboardPage() {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', color: '#6b7280' }}>
          OVERVIEW
        </Typography>
        <Typography sx={{ mt: 1, fontFamily: '"Georgia", serif', fontSize: { xs: 32, md: 42 } }}>
          Dashboard summary
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 720, color: '#4b5563' }}>
          This page uses Material UI cards and progress sections to present a
          simple dashboard overview for the project.
        </Typography>
      </Box>

      <Grid container spacing={2.5}>
        {summaryCards.map((card) => (
          <Grid item key={card.label} xs={12} sm={6} xl={3}>
            <Card sx={{ borderRadius: 5, boxShadow: '0 18px 40px rgba(15,23,42,0.08)' }}>
              <CardContent>
                <Stack direction="row" justifyContent="space-between" spacing={2}>
                  <Box>
                    <Typography sx={{ color: '#6b7280', fontSize: 13, fontWeight: 700 }}>
                      {card.label}
                    </Typography>
                    <Typography sx={{ mt: 1, fontSize: 28, fontWeight: 800, color: '#111827' }}>
                      {card.value}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: card.tone, width: 52, height: 52 }}>
                    {card.icon}
                  </Avatar>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2.5}>
        <Grid item xs={12} md={7}>
          <Card sx={{ borderRadius: 5, height: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, fontWeight: 800, color: '#111827' }}>
                Project notes
              </Typography>
              <Typography sx={{ mt: 2, color: '#4b5563', lineHeight: 1.8 }}>
                Lab Activity 5 redesigns the project into a dashboard experience.
                The drawer navigation links the overview, reports, and users
                pages, while the MUI component library handles layout, tables,
                and charts.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ borderRadius: 5, height: '100%' }}>
            <CardContent>
              <Typography sx={{ fontSize: 20, fontWeight: 800, color: '#111827' }}>
                Progress status
              </Typography>
              <Stack spacing={3} sx={{ mt: 3 }}>
                {activity.map((item) => (
                  <Box key={item.label}>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                      <Typography sx={{ fontWeight: 700, color: '#374151' }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ fontWeight: 800, color: '#111827' }}>
                        {item.value}%
                      </Typography>
                    </Stack>
                    <LinearProgress
                      sx={{
                        height: 10,
                        borderRadius: 999,
                        backgroundColor: '#e5e7eb',
                        '& .MuiLinearProgress-bar': { borderRadius: 999 },
                      }}
                      value={item.value}
                      variant="determinate"
                    />
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default DashboardPage
