import { useState } from 'react'
import { Alert, Button, Card, Form, Input, Select } from 'antd'
import { useNavigate } from 'react-router'
import { 
    PlusSquareOutlined, 
    UserOutlined,
    CheckCircleOutlined
} from '@ant-design/icons'

const CreateMailbox = (props) => {
    const [form] = Form.useForm()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const selectOptions = [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
    ]

    const handleFinish = async (values) => {
        setIsSubmitting(true)
        setErrorMessage('')

        try {
            await props.handleAddMailbox(values)
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
                    <PlusSquareOutlined style={{ color: '#1677ff', marginRight: 8 }} />
                    New Mailbox
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
                    title="Mailbox could not be added"
                    description={errorMessage}
                    style={{ marginBottom: 24 }}
                />
            )}

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={{
                    boxOwner: undefined,
                    boxSize: undefined,
                }}
            >
                <Form.Item
                    label="Boxholder Name"
                    name="boxOwner"
                    rules={[
                        {
                            required: true,
                            whitespace: true,
                            message: 'Please enter a boxholder name',
                        },
                        {
                            min: 2,
                            message: 'Name must be at least 2 characters',
                        },
                    ]}
                >
                    <Input 
                        prefix={<UserOutlined style={{ color: '#bfbfbf' }} />} 
                        placeholder="e.g. John Doe" 
                        size="large"
                    />
                </Form.Item>

                <Form.Item
                    name="boxSize"
                    label="Mailbox Size"
                    rules={[
                        {
                            required: true,
                            // whitespace: true removed here to fix the validation bug!
                            message: 'Please select a mailbox size!'
                        }
                    ]}
                >
                    <Select
                        placeholder="Select a Box Size"
                        allowClear
                        options={selectOptions}
                        size="large"
                    />
                </Form.Item>

                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    block
                    size="large"
                    icon={<CheckCircleOutlined />}
                    style={{ marginTop: 16 }}
                >
                    Create Mailbox
                </Button>
            </Form>
        </Card>
    )
}

export default CreateMailbox















// import { useState } from 'react'
// import { Alert, Button, Card, Form, Input, Select } from 'antd'
// import { useNavigate } from 'react-router'


// const CreateMailbox = (props) => {
//     const [form] = Form.useForm()
//     const [isSubmitting, setIsSubmitting] = useState(false)
//     const [errorMessage, setErrorMessage] = useState('')
//     const navigate = useNavigate()

//     const selectOptions = [
//         { value: 'small', label: 'Small' },
//         { value: 'medium', label: 'Medium' },
//         { value: 'large', label: 'Large' },
//     ]

//     const handleFinish = async (values) => {
//         console.log('Mailbox (before): ',props.mailboxes);
//         console.log('Values of Form: ',values);
//         setIsSubmitting(true)
//         setErrorMessage('')

//         try {
//             await props.handleAddMailbox(values)
//             form.resetFields()
//             navigate('/mailboxes')
//         } catch (error) {
//             setErrorMessage(error.message)
//         } finally {
//             setIsSubmitting(false)
//         }
//     }

//     return (
//         <Card title="New Mailbox" className="form-card" style={{ maxWidth: '600px', margin: '0 auto', marginTop: '40px' }}>

//             {errorMessage && (
//                 <Alert
//                     type="error"
//                     showIcon
//                     title="Mailbox could not be added"
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
//                         boxOwner: undefined,
//                         boxSize: undefined,
//                     }
//                 }
//             >

//                 <Form.Item
//                     label="Enter a Boxholder"
//                     name="boxOwner"
//                     rules={[
//                         {
//                             required: true,
//                             whitespace: true,
//                             message: 'Please enter a boxholder name',
//                         },
//                         {
//                             min: 2,
//                             message: 'Name must be at least 2 characters',
//                         },
//                     ]}
//                 >
//                     <Input placeholder="Boxholder name" />
//                 </Form.Item>

//                 <Form.Item
//                     name="boxSize"
//                     label="mailbox Size"
//                     rules={[
//                         {
//                             required: true,
//                             whitespace: true,
//                             message: 'Please select a mailbox size!'
//                         }
//                     ]}
//                 >
//                     <Select
//                         placeholder="Select a Box Size"
//                         allowClear
//                         options={selectOptions}
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

// export default CreateMailbox