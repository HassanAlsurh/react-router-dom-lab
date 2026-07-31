import { Card, Typography } from 'antd'
const { Paragraph, Title } = Typography

const Home = () => {
  return (
    <Card>
      <Title level={2}>Welcome to the Post Office</Title>
      <Paragraph>
        Browse the mailboxes list, view mailboxes details, or add new mailboxes.
      </Paragraph>
    </Card>
  )
}

export default Home