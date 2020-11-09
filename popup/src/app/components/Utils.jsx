import { Form, Input } from 'antd';

export const InputField = ({name, value, type, placeholder, onChange, 
                            onEnter, prefix=null, rules=null}) => {
    const props = {
        type,
        value,
        placeholder,
        onChange,
        onKeyPress: onEnter,
        prefix
    }
    return (
        <Form.Item name={name} rules={rules}>
            <Input {...props} />
        </Form.Item>
    )
};