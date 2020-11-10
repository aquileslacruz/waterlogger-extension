import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from 'antd';

import { register } from '../actions';
import { changePage } from '../../app/actions';
import { InputField } from '../../app/components/Utils';
import { PAGES } from '../../app/constants';

const RegisterContainer = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const handleUsername = e => setUsername(e.target.value);
    const handleFirstName = e => setFirstName(e.target.value);
    const handleLastName = e => setLastName(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleConfirmation = e => setConfirmation(e.target.value);

    const onSubmit = () => {
        dispatch(register(username, password, firstName, lastName));
    };

    const onLoginClick = () => {
        dispatch(changePage(PAGES.LOGIN));
    }

    const onKeyPress = e => {
        if (e.which === 13) onSubmit();
    }

    const validatePassword = (_, value) => (
        value !== '' && value === password ?
            Promise.resolve() :
            Promise.reject('Password must match!')
    )

    const inputFields = {
        username: { value: username, onChange: handleUsername },
        firstName: { value: firstName, onChange: handleFirstName },
        lastName: { value: lastName, onChange: handleLastName },
        password: { value: password, onChange: handlePassword },
        confirmation: { value: confirmation, onChange: handleConfirmation, validator: validatePassword},
    }

    return (
        <Register 
            fields={inputFields}
            onSubmit={onSubmit}
            onKeyPress={onKeyPress}
            onLoginClick={onLoginClick}
        />
    )
};

const Register = ({ fields, onKeyPress, onLoginClick, onSubmit }) => (
    <div id={'register-page'}>
        <Form className='register-form' onFinish={onSubmit}>
            <UsernameInput {...fields.username} onKeyPress={onKeyPress} />
            <FirstNameInput {...fields.firstName} onKeyPress={onKeyPress} />
            <LastNameInput {...fields.lastName} onKeyPress={onKeyPress} />
            <PasswordInput {...fields.password} onKeyPress={onKeyPress} />
            <ConfirmInput {...fields.confirmation} onKeyPress={onKeyPress} />
            <Form.Item>
                <SubmitButton />
                <LoginButton onClick={onLoginClick} />
            </Form.Item>
        </Form>
    </div>
);

const UsernameInput = ({value, onChange, onKeyPress}) => {
    const props = {
        value,
        onChange,
        onKeyPress,
        type: 'text',
        name: 'username',
        placeholder: 'Username',
        rules: [{required: true, message: 'A username is required!'}],
    }

    return <InputField {...props} />
};

const FirstNameInput = ({value, onChange, onKeyPress}) => {
    const props = {
        value,
        onChange,
        onKeyPress,
        type: 'text',
        name: 'firstName',
        placeholder: 'First Name',
    }

    return <InputField {...props} />
};

const LastNameInput = ({value, onChange, onKeyPress}) => {
    const props = {
        value,
        onChange,
        onKeyPress,
        type: 'text',
        name: 'lastName',
        placeholder: 'Last Name',
    }

    return <InputField {...props} />
};

const PasswordInput = ({value, onChange, onKeyPress}) => {
    const props = {
        value,
        onChange,
        onKeyPress,
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        rules: [{required: true, message: 'A password is required!'}],
    }

    return <InputField {...props} />
};

const ConfirmInput = ({value, onChange, onKeyPress, validator}) => {
    const props = {
        value,
        onChange,
        onKeyPress,
        type: 'password',
        name: 'confirm',
        placeholder: 'Re-type Password',
        rules: [
            {required: true, message: 'You must confirm the password!'},
            {validator},
        ],
    }

    return <InputField {...props} />
};

const SubmitButton = () => (
    <Button type='primary' htmlType='submit'>
        {'Submit'}
    </Button>
)

const LoginButton = ({onClick}) => (
    <Button type='default' onClick={onClick}>
        {'Login'}
    </Button>
)

export default RegisterContainer;