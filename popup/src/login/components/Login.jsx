import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from '../actions';
import '../styles.css';

const LoginContainer = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.which === 13) submitForm();
    }

    const submitForm = () => {
        dispatch(login(username, password));
    }

    return (
        <Login
            username={{
                value: username,
                handler: handleUsernameChange
            }}
            password={{
                value: password,
                handler: handlePasswordChange
            }}
            handleKeyPress={handleKeyPress}
            handleSubmit={submitForm}
        />
    )
}

const Login = ({username, password, handleKeyPress, handleSubmit}) => (
    <div id={'login-page'}>
        <Form className='login-form' onFinish={handleSubmit}>
            <UsernameInput {...username} handleKeyPress={handleKeyPress} />
            <PasswordInput {...password} handleKeyPress={handleKeyPress} />
            <SubmitButton submit={handleSubmit}/>
        </Form>
    </div>
)

const UsernameInput = ({value, handler, handleKeyPress}) => {
    const rules = [{required: true, message: 'Please input your username!'}];
    const props = {
        type: 'text',
        value: value,
        placeholder: 'Username',
        onChange: handler,
        onKeyPress: handleKeyPress,
        prefix: <UserOutlined className='site-form-item-icon' />,
    };

    return (
        <Form.Item name='username' rules={rules}>
            <Input {...props} />
        </Form.Item>
    )
};

const PasswordInput = ({value, handler, handleKeyPress}) => {
    const rules = [{required: true, message: 'Please input your password!'}];
    const props = {
        type: 'password',
        value: value,
        placeholder: 'Password',
        onChange: handler,
        onKeyPress: handleKeyPress,
        prefix: <LockOutlined className='site-form-item-icon' />,
    };

    return (
        <Form.Item name='password' rules={rules}>
            <Input {...props} />
        </Form.Item>
    )
};

const SubmitButton = () => (
    <Button type='primary' htmlType='submit'>
        {'Login'}
    </Button>
)

export default LoginContainer;