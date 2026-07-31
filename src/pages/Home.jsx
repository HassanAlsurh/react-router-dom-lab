import { Card, Typography, Button, Space, Divider } from 'antd'
import { Link } from 'react-router'
import { 
  HomeTwoTone, 
  AppstoreOutlined, 
  PlusSquareOutlined,
  MailOutlined
} from '@ant-design/icons'

const { Paragraph, Title } = Typography

const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <Card 
        style={{ 
          textAlign: 'center', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          padding: '24px 0'
        }}
      >
        <HomeTwoTone 
          twoToneColor="#1677ff" 
          style={{ fontSize: '56px', marginBottom: '16px' }} 
        />
        
        <Title level={2} style={{ marginTop: 0 }}>
          Welcome to the Post Office
        </Title>
        
        <Paragraph style={{ fontSize: '16px', color: '#595959', marginBottom: '32px' }}>
          Browse the mailboxes list, view details, create new mailboxes, or send letters.
        </Paragraph>
        
        <Divider style={{ width: '80%', minWidth: '80%', margin: '0 auto 32px auto' }} />

        <Space size="middle" wrap style={{ justifyContent: 'center', width: '100%' }}>
          <Link to="/mailboxes">
            <Button type="primary" size="large" icon={<AppstoreOutlined />}>
              View Mailboxes
            </Button>
          </Link>
          
          <Link to="/mailboxes/new">
            <Button size="large" icon={<PlusSquareOutlined />}>
              New Mailbox
            </Button>
          </Link>

          <Link to="/mailboxes/newletter">
            <Button size="large" icon={<MailOutlined />}>
              Send Letter
            </Button>
          </Link>
        </Space>
        
      </Card>
    </div>
  )
}

export default Home










// import { Card, Typography } from 'antd'
// const { Paragraph, Title } = Typography

// const Home = () => {
//   return (
//     <Card>
//       <Title level={2}>Welcome to the Post Office</Title>
//       <Paragraph>
//         Browse the mailboxes list, view mailboxes details, or add new mailboxes.
//       </Paragraph>
//     </Card>
//   )
// }

// export default Home