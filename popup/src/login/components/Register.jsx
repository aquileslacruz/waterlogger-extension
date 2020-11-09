import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { changePage } from '../../app/actions';
import { InputField } from '../../app/components/Utils';
import { PAGES } from '../../app/constants';

const RegisterContainer = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleUsername = e => setUsername(e.target.value);
    const handleFirstName = e => setFirstName(e.target.value);
    const handleLastName = e => setLastName(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleConfirm = e => setConfirm(e.target.value);

    const onSubmit = () => {
        dispatch(register(username, password, firstName, lastName));
    };

    const onLoginClick = () => {
        dispatch(changePage(PAGES.LOGIN));
    }

    const onKeyPress = e => {
        if (e.which === 13) onSubmit();
    }

    const inputFields = {
        username: { value: username, onChange: handleUsername },
        firstName: { value: firstName, onChange: handleFirstName },
        lastName: { value: lastName, onChange: handleLastName },
        password: { value: password, onChange: handlePassword },
        confirm: { value: confirm, onChange: handleConfirm },
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
            <ConfirmInput {...fields.confirm} onKeyPress={onKeyPress} />
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

const ConfirmInput = ({value, onChange, onKeyPress, matches}) => {
    const props = {
        value,
        onChange,
        onKeyPress,
        type: 'password',
        name: 'confirm',
        placeholder: 'Re-type Password',
        rules: [{required: true, message: 'You must confirm the password!'}],
        help: !matches && 'Password doesn\'t match!'
    }

    return <InputField {...props} />
};

export default RegisterContainer;