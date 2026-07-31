import { Card, Empty, Flex, Typography, Tag, Button } from 'antd'
import { Link } from 'react-router'
import { 
  AppstoreOutlined, 
  InboxOutlined, 
  ArrowRightOutlined 
} from '@ant-design/icons'

const { Paragraph, Title } = Typography

const MailboxesList = (props) => {

  if (props.mailboxes.length === 0) {
    return (
      <div style={{ marginTop: '100px' }}>
        <Empty description="No mailboxes found" />
      </div>
    )
  }

  // Helper function to keep size colors consistent across the app
  const getSizeColor = (size) => {
    const lowerSize = size?.toLowerCase();
    if (lowerSize === 'small') return 'cyan';
    if (lowerSize === 'medium') return 'blue';
    if (lowerSize === 'large') return 'purple';
    return 'default';
  }

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
      <Title level={2} style={{ marginTop: 0, marginBottom: 24 }}>
        <AppstoreOutlined style={{ color: '#1677ff', marginRight: 12 }} />
        Mailbox List
      </Title>

      {/* wrap="wrap" is essential here so the cards wrap to the next line instead of squishing! */}
      <Flex gap="large" wrap="wrap">
        {props.mailboxes.map((mailbox) => (
          <Card
            key={mailbox._id}
            hoverable
            style={{ 
              width: 320, 
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)' 
            }}
            title={
              <>
                <InboxOutlined style={{ color: '#1677ff', marginRight: 8 }} />
                {`Mailbox ${mailbox._id}`}
              </>
            }
            extra={
              <Link to={`/mailboxes/${mailbox._id}`}>
                <Button type="link" size="small" icon={<ArrowRightOutlined />}>
                  View
                </Button>
              </Link>
            }
          >
            {/* Displaying a quick preview of the box details */}
            <Paragraph style={{ margin: 0 }}>
              <strong>Owner:</strong> {mailbox.boxOwner || 'Unknown'}
            </Paragraph>
            
            <Paragraph style={{ margin: 0, marginTop: 12 }}>
              <strong>Size:</strong>{' '}
              {mailbox.boxSize ? (
                <Tag color={getSizeColor(mailbox.boxSize)}>
                  {mailbox.boxSize}
                </Tag>
              ) : (
                <Tag>None</Tag>
              )}
            </Paragraph>
          </Card>
        ))}
      </Flex>
    </main>
  )
}

export default MailboxesList






















// import { Alert, Card, Empty, Flex, Spin, Typography } from 'antd'
// import { Link } from 'react-router'

// const { Paragraph, Title } = Typography
// const MailboxesList = (props) => {

//      if (props.mailboxes.length === 0) {
//     return <Empty description="No mailboxes found" />
//   }

//   return (
//     <main>
//       <Title level={2}>Mailbox List</Title>

//       <Flex gap="middle">
//         {props.mailboxes.map((mailbox) => (
//           <Card
//             key={mailbox._id}
//             title={(
//               <Link to={`/mailboxes/${mailbox._id}`}>
//                 {`Mailbox ${mailbox._id}`}
//               </Link>
//             )}
//           >

//           </Card>
//         ))}

//       </Flex>
//     </main>
//   )
// }

// export default MailboxesList


