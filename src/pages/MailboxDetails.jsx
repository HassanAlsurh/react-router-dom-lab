import { Alert, Button, Card, Spin, Typography } from 'antd'
import { Link, useParams } from 'react-router'

const { Title, Paragraph } = Typography

const MailboxDetails = (props) => {
    const { mailboxId } = useParams()
    // let i = 0
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

    return (
        <>
            <Card
                title={`Mailbox ${currentMailbox._id}`}
                extra={(
                    <Link to="/mailboxes">
                        <Button>Back to Mailbox List</Button>
                    </Link>
                )}
            >
                <Title level={4} style={{ marginTop: 0 }}>
                    Details
                </Title>
                <Paragraph>
                    <strong>Boxholder:</strong> {currentMailbox.boxOwner}
                </Paragraph>
                <Paragraph>
                    <strong>Box Size:</strong> {currentMailbox.boxSize}
                </Paragraph>
            
            <Title  level={4} style={{ marginTop: 26 }}>
                Letters
            </Title>
            {
                selectedLetters.map((letter, index) => (

                    <Card
                        key={index}
                        title={`${index + 1}. To ${letter.recipient}`}
                    >
                        <Paragraph>
                            {letter.message}
                        </Paragraph>
                    </Card>
                    
                ))
            }
            </Card>
        </>
    )

}

export default MailboxDetails