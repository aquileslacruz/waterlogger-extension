import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { login } from '../actions';
import { InputField } from '../../app/components/Utils';
import { changePage } from '../../app/actions';
import { PAGES } from '../../app/constants';

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

    const goToRegister = () => {
        dispatch(changePage(PAGES.REGISTER));
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
            register={goToRegister}
        />
    )
}

const Login = ({username, password, handleKeyPress, handleSubmit, register}) => (
    <div id={'login-page'}>
        <Form className='login-form' onFinish={handleSubmit}>
            <UsernameInput {...username} handleKeyPress={handleKeyPress} />
            <PasswordInput {...password} handleKeyPress={handleKeyPress} />
            <Form.Item>
                <SubmitButton submit={handleSubmit}/>
                <RegisterButton register={register} />
            </Form.Item>
        </Form>
    </div>
)

const UsernameInput = ({value, handler, handleKeyPress}) => {
    const props = {
        name: 'username',
        type: 'text',
        value: value,
        placeholder: 'Username',
        onChange: handler,
        onKeyPress: handleKeyPress,
        prefix: <UserOutlined className='site-form-item-icon' />,
        rules: [{required: true, message: 'Please input your username!'}],
    };

    return <InputField {...props} />
};

const PasswordInput = ({value, handler, handleKeyPress}) => {
    const props = {
        name: 'password',
        type: 'password',
        value: value,
        placeholder: 'Password',
        onChange: handler,
        onKeyPress: handleKeyPress,
        prefix: <LockOutlined className='site-form-item-icon' />,
        rules: [{required: true, message: 'Please input your password!'}],
    };

    return <InputField {...props} />
};

const SubmitButton = () => (
    <Button type='primary' htmlType='submit'>
        {'Login'}
    </Button>
)

const RegisterButton = ({register}) => (
    <Button type='default' onClick={register}>
        {'Register'}
    </Button>
)

export default LoginContainer;