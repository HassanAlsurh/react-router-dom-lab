import { Alert, Button, Card, Typography, Tag } from 'antd'
import { Link, useParams } from 'react-router'
import { 
    InboxOutlined, 
    UserOutlined, 
    MailTwoTone 
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    
    const currentMailbox = props.mailboxes.find((currentMailbox) => {
        return currentMailbox._id === Number(mailboxId)
    })

    const selectedLetters = props.letters.filter((letter) => (
        letter.mailBox === Number(mailboxId)
    ))

    if (!currentMailbox) {
        return (
            <Alert
                type="warning"
                showIcon
                title="Mailbox Not Found"
                description="The requested mailbox does not exist."
            />
        )
    }

    // Helper function to assign standard Ant Design colors based on box size
    const getSizeColor = (size) => {
        const lowerSize = size?.toLowerCase();
        if (lowerSize === 'small') return 'cyan';
        if (lowerSize === 'medium') return 'blue';
        if (lowerSize === 'large') return 'purple';
        return 'default';
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <Card
                title={
                    <>
                        <InboxOutlined style={{ color: '#1677ff', marginRight: 8 }} />
                        {`Mailbox ${currentMailbox._id}`}
                    </>
                }
                extra={
                    <Link to="/mailboxes">
                        <Button>Back to Mailbox List</Button>
                    </Link>
                }
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
            >
                <Title level={4} style={{ marginTop: 0 }}>
                    <UserOutlined style={{ color: '#52c41a', marginRight: 8 }} />
                    Details
                </Title>
                <Paragraph>
                    <strong>Boxholder:</strong> {currentMailbox.boxOwner}
                </Paragraph>
                <Paragraph>
                    <strong>Box Size:</strong>{' '}
                    <Tag color={getSizeColor(currentMailbox.boxSize)}>
                        {currentMailbox.boxSize}
                    </Tag>
                </Paragraph>
            
                <Title level={4} style={{ marginTop: 32, marginBottom: 16 }}>
                    Letters
                </Title>
                
                {selectedLetters.map((letter, index) => (
                    <Card
                        key={index}
                        type="inner"
                        headStyle={{ backgroundColor: '#e6f4ff' }}
                        title={
                            <>
                                <MailTwoTone twoToneColor="#1677ff" style={{ marginRight: 8 }} />
                                {`${index + 1}. To ${letter.recipient}`}
                            </>
                        }
                        style={{ marginBottom: 16 }}
                    >
                        <Paragraph style={{ margin: 0 }}>
                            {letter.message}
                        </Paragraph>
                    </Card>
                ))}
            </Card>
        </div>
    )
}

export default MailboxDetails












// import { Alert, Button, Card, Spin, Typography } from 'antd'
// import { Link, useParams } from 'react-router'

// const { Title, Paragraph } = Typography

// const MailboxDetails = (props) => {
//     const { mailboxId } = useParams()
//     // let i = 0
//     const currentMailbox = props.mailboxes.find((currentMailbox) => {
//         return currentMailbox._id === Number(mailboxId)
//     })

//     const selectedLetters = props.letters.filter((letter) => (
//         letter.mailBox === Number(mailboxId)
//     ))

//     if (!currentMailbox) {
//         return (
//             <Alert
//                 type="warning"
//                 showIcon
//                 title="Mailbox Not Found"
//                 description="The requested mailbox does not exist."
//             />
//         )
//     }

//     return (
//         <>
//             <Card
//                 title={`Mailbox ${currentMailbox._id}`}
//                 extra={(
//                     <Link to="/mailboxes">
//                         <Button>Back to Mailbox List</Button>
//                     </Link>
//                 )}
//             >
//                 <Title level={4} style={{ marginTop: 0 }}>
//                     Details
//                 </Title>
//                 <Paragraph>
//                     <strong>Boxholder:</strong> {currentMailbox.boxOwner}
//                 </Paragraph>
//                 <Paragraph>
//                     <strong>Box Size:</strong> {currentMailbox.boxSize}
//                 </Paragraph>
            
//             <Title  level={4} style={{ marginTop: 26 }}>
//                 Letters
//             </Title>
//             {
//                 selectedLetters.map((letter, index) => (

//                     <Card
//                         key={index}
//                         title={`${index + 1}. To ${letter.recipient}`}
//                     >
//                         <Paragraph>
//                             {letter.message}
//                         </Paragraph>
//                     </Card>
                    
//                 ))
//             }
//             </Card>
//         </>
//     )

// }

// export default MailboxDetails


