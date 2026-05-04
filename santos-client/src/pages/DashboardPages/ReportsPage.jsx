import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material'
import { BarChart, LineChart } from '@mui/x-charts'

const revenue = [2400, 1398, 9800, 3908, 4800, 3800]
const traffic = [1200, 1700, 1400, 2100, 2600, 2300]
const conversions = [4.2, 4.8, 5.1, 5.9, 6.4, 6.1]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

const statCards = [
  { label: 'Revenue Growth', value: '+18.4%', tone: '#0f766e' },
  { label: 'Traffic Change', value: '+12.1%', tone: '#f59e0b' },
  { label: 'Conversion Rate', value: '6.1%', tone: '#2563eb' },
]

function ReportsPage() {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.22em',
            color: '#6b7280',
          }}
        >
          REPORTS
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontFamily: '"Georgia", serif',
            fontSize: { xs: 32, md: 42 },
          }}
        >
          Charts and data visualization
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 760, color: '#4b5563', lineHeight: 1.8 }}>
          This section uses MUI X charts to present cleaner sample analytics
          data, with a wider dashboard layout that feels more like a finished
          reports screen.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(3, minmax(0, 1fr))',
          },
        }}
      >
        {statCards.map((card) => (
          <Card
            key={card.label}
            sx={{
              borderRadius: 5,
              boxShadow: '0 18px 40px rgba(15,23,42,0.08)',
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography sx={{ color: '#6b7280', fontSize: 13, fontWeight: 700 }}>
                    {card.label}
                  </Typography>
                  <Typography sx={{ mt: 1, fontSize: 30, fontWeight: 800, color: '#111827' }}>
                    {card.value}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'grid',
                    placeItems: 'center',
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    bgcolor: card.tone,
                    color: '#fff',
                  }}
                >
                  <TrendingUpRoundedIcon />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: {
            xs: '1fr',
            xl: 'minmax(0, 1.25fr) minmax(320px, 0.75fr)',
          },
        }}
      >
        <Card sx={{ borderRadius: 5, boxShadow: '0 18px 40px rgba(15,23,42,0.08)' }}>
          <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              spacing={2}
            >
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: 22, color: '#111827' }}>
                  Revenue overview
                </Typography>
                <Typography sx={{ mt: 1, color: '#6b7280' }}>
                  Monthly revenue performance across the first half of the year.
                </Typography>
              </Box>
              <Chip
                label="Updated this quarter"
                sx={{
                  alignSelf: 'flex-start',
                  bgcolor: '#ecfeff',
                  color: '#0f766e',
                  fontWeight: 700,
                }}
              />
            </Stack>

            <Box sx={{ mt: 2 }}>
              <BarChart
                borderRadius={10}
                grid={{ horizontal: true }}
                height={360}
                margin={{ left: 56, right: 18, top: 16, bottom: 28 }}
                series={[
                  {
                    color: '#0f766e',
                    data: revenue,
                    label: 'Revenue',
                  },
                ]}
                xAxis={[{ data: months, scaleType: 'band' }]}
              />
            </Box>
          </CardContent>
        </Card>

        <Stack spacing={2.5}>
          <Card sx={{ borderRadius: 5, boxShadow: '0 18px 40px rgba(15,23,42,0.08)' }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Typography sx={{ fontWeight: 800, fontSize: 22, color: '#111827' }}>
                Visitor trend
              </Typography>
              <Typography sx={{ mt: 1, color: '#6b7280' }}>
                Overall traffic movement per month.
              </Typography>
              <Box sx={{ mt: 2 }}>
                <LineChart
                  grid={{ horizontal: true }}
                  height={250}
                  margin={{ left: 50, right: 16, top: 16, bottom: 24 }}
                  series={[
                    {
                      color: '#f59e0b',
                      curve: 'monotoneX',
                      data: traffic,
                      label: 'Visitors',
                    },
                  ]}
                  xAxis={[{ data: months, scaleType: 'point' }]}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 5, boxShadow: '0 18px 40px rgba(15,23,42,0.08)' }}>
            <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
              <Typography sx={{ fontWeight: 800, fontSize: 22, color: '#111827' }}>
                Report notes
              </Typography>
              <Stack spacing={2} sx={{ mt: 2.5 }}>
                {months.map((month, index) => (
                  <Box key={month}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography sx={{ fontWeight: 700, color: '#374151' }}>
                        {month}
                      </Typography>
                      <Typography sx={{ fontWeight: 800, color: '#111827' }}>
                        {conversions[index]}%
                      </Typography>
                    </Stack>
                    <Typography sx={{ mt: 0.75, color: '#6b7280', fontSize: 14 }}>
                      Conversion rate for the month.
                    </Typography>
                    {index < months.length - 1 ? <Divider sx={{ mt: 2 }} /> : null}
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Stack>
  )
}

export default ReportsPage
