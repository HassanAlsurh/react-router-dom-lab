import { useState } from 'react'
import { Alert, Button, Card, Form, Input, Select } from 'antd'
import { useNavigate } from 'react-router'
import { 
    SendOutlined, 
    UserOutlined, 
    MailOutlined 
} from '@ant-design/icons'

const { TextArea } = Input;

const LetterForm = (props) => {
    const [form] = Form.useForm()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const selectOptions = props.mailboxes.map((mailbox) => ({
        value: mailbox._id,
        label: `Mailbox ${mailbox._id}`,
    }));

    const handleFinish = async (values) => {
        setIsSubmitting(true)
        setErrorMessage('')

        try {
            await props.handleAddLetter(values)
            form.resetFields()
            navigate('/mailboxes')
        } catch (error) {
            setErrorMessage(error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Card 
            title={
                <>
                    <MailOutlined style={{ color: '#1677ff', marginRight: 8 }} />
                    New Letter
                </>
            } 
            className="form-card" 
            style={{ 
                maxWidth: '600px', 
                margin: '0 auto', 
                marginTop: '40px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}
        >

            {errorMessage && (
                <Alert
                    type="error"
                    showIcon
                    title="Letter could not be sent"
                    description={errorMessage}
                    style={{ marginBottom: 24 }}
                />
            )}

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{
                    mailBox: undefined,
                    recipient: undefined,
                    message: undefined,
                }}
            >
                <Form.Item
                    name="mailBox"
                    label="Mailbox"
                    rules={[
                        {
                            required: true,
                            message: 'Please select a mailbox!'
                        }
                    ]}
                >
                    <Select
                        size="large"
                        placeholder="Select a Mailbox"
                        allowClear
                        options={selectOptions}
                    />
                </Form.Item>

                <Form.Item
                    label="Recipient"
                    name="recipient"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: 'Please enter the recipient name',
                        },
                        {
                            min: 2,
                            message: 'Name must be at least 2 characters',
                        },
                    ]}
                >
                    <Input 
                        size="large"
                        prefix={<UserOutlined style={{ color: '#bfbfbf' }} />}
                        placeholder="Recipient name" 
                    />
                </Form.Item>

                <Form.Item
                    label="Message"
                    name="message"
                    rules={[
                        {
                            required: true,
                            message: 'Please provide a message!'
                        }
                    ]}
                >
                    <TextArea
                        size="large"
                        placeholder="Type your message here..."
                        autoSize={{ minRows: 4, maxRows: 8 }}
                        showCount
                        maxLength={500}
                    />
                </Form.Item>

                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    block
                    size="large"
                    icon={<SendOutlined />}
                    style={{ marginTop: 16 }}
                >
                    Send Letter
                </Button>
            </Form>
        </Card>
    )
}

export default LetterForm














// import { useState } from 'react'
// import { Alert, Button, Card, Form, Input, Select } from 'antd'
// import { useNavigate } from 'react-router'
// const { TextArea } = Input;

// const LetterForm = (props) => {
//     const [form] = Form.useForm()
//     const [isSubmitting, setIsSubmitting] = useState(false)
//     const [errorMessage, setErrorMessage] = useState('')
//     const navigate = useNavigate()

//     const selectOptions = props.mailboxes.map((mailbox) => ({
//         value: mailbox._id,
//         label: `Mailbox ${mailbox._id}`,
//     }));

//     const handleFinish = async (values) => {
//         console.log('letters (before): ', props.letters);
//         console.log('Values of Form: ', values);
//         setIsSubmitting(true)
//         setErrorMessage('')

//         try {
//             await props.handleAddLetter(values)
//             form.resetFields()
//             navigate('/mailboxes')
//         } catch (error) {
//             setErrorMessage(error.message)
//         } finally {
//             setIsSubmitting(false)
//         }
//     }

//     return (
//         <Card title="New Letter" className="form-card" style={{ maxWidth: '600px', margin: '0 auto', marginTop: '40px' }}>

//             {errorMessage && (
//                 <Alert
//                     type="error"
//                     showIcon
//                     title="Letter could not be sent"
//                     description={errorMessage}
//                     className="form-alert"
//                 />
//             )}

//             <Form
//                 form={form}
//                 layout="vertical"
//                 onFinish={handleFinish}
//                 initialValues={
//                     {
//                         mailBox: undefined,
//                         recipient: undefined,
//                         message: undefined,
//                     }
//                 }
//             >


//                 <Form.Item
//                     name="mailBox"
//                     label="Mailbox"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please select a mailbox!'
//                         }
//                     ]}
//                 >
//                     <Select
//                         placeholder="Select a Mailbox"
//                         allowClear
//                         options={selectOptions}
//                     />
//                 </Form.Item>

//                 <Form.Item
//                     label="Recipient"
//                     name="recipient"
//                     rules={[
//                         {
//                             required: true,
//                             whitespace: true,
//                             message: 'Please enter the recipient name',
//                         },
//                         {
//                             min: 2,
//                             message: 'Name must be at least 2 characters',
//                         },
//                     ]}
//                 >
//                     <Input placeholder="Recipient name" />
//                 </Form.Item>



//                 <Form.Item
//                     label="Message"
//                     name="message"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please provide a message!'
//                         }
//                     ]}
//                     >
//                     <TextArea
//                         placeholder="Message..."
//                         autoSize={{ minRows: 3, maxRows: 6 }}
//                         showCount
//                         maxLength={500}
//                     />
//                 </Form.Item>



//                 <Button
//                     type="primary"
//                     htmlType="submit"
//                     loading={isSubmitting}
//                     block
//                 >
//                     Submit
//                 </Button>

//             </Form>

//         </Card>
//     )
// }

// export default LetterForm