import { Alert, Card, Empty, Flex, Spin, Typography } from 'antd'
import { Link } from 'react-router'

const { Paragraph, Title } = Typography
const MailboxesList = (props) => {

     if (props.mailboxes.length === 0) {
    return <Empty description="No mailboxes found" />
  }

  return (
    <main>
      <Title level={2}>Mailbox List</Title>

      <Flex gap="middle">
        {props.mailboxes.map((mailbox) => (
          <Card
            key={mailbox._id}
            title={(
              <Link to={`/mailboxes/${mailbox._id}`}>
                {`Mailbox ${mailbox._id}`}
              </Link>
            )}
          >

          </Card>
        ))}

      </Flex>
    </main>
  )
}

export default MailboxesList


