import { useState } from 'react'
import { Alert, Button, Card, Form, Input, Select } from 'antd'
import { useNavigate } from 'react-router'
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
        console.log('letters (before): ', props.letters);
        console.log('Values of Form: ', values);
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
        <Card title="New Letter" className="form-card">

            {errorMessage && (
                <Alert
                    type="error"
                    showIcon
                    title="Letter could not be sent"
                    description={errorMessage}
                    className="form-alert"
                />
            )}

            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                initialValues={
                    {
                        mailBox: undefined,
                        recipient: undefined,
                        message: undefined,
                    }
                }
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
                    <Input placeholder="Recipient name" />
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
                        placeholder="Message..."
                        autoSize={{ minRows: 3, maxRows: 6 }}
                        showCount
                        maxLength={500}
                    />
                </Form.Item>



                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isSubmitting}
                    block
                >
                    Submit
                </Button>

            </Form>

        </Card>
    )
}

export default LetterForm