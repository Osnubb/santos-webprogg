import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import articles from '../../assets/article-content'

function DashArticleListPage() {
  return (
    <Stack spacing={3}>
      <Box>
        <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.22em', color: '#6b7280' }}>
          ARTICLES
        </Typography>
        <Typography sx={{ mt: 1, fontFamily: '"Georgia", serif', fontSize: { xs: 32, md: 42 } }}>
          Dashboard article list
        </Typography>
        <Typography sx={{ mt: 1.5, maxWidth: 760, color: '#4b5563' }}>
          These article entries are shared with the public ArticleListPage so
          the same content appears both inside and outside the dashboard.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2.5,
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, minmax(0, 1fr))' },
        }}
      >
        {articles.map((article) => (
          <Card key={article.id} sx={{ borderRadius: 5, boxShadow: '0 18px 40px rgba(15,23,42,0.08)' }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box>
                  <Typography sx={{ fontSize: 22, fontWeight: 800, color: '#111827' }}>
                    {article.title}
                  </Typography>
                  <Typography sx={{ mt: 1, color: '#4b5563', lineHeight: 1.7 }}>
                    {article.excerpt}
                  </Typography>
                </Box>
                <Chip label={article.tag} sx={{ fontWeight: 700 }} />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Stack>
  )
}

export default DashArticleListPage
