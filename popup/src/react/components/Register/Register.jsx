import { Form, Button } from "antd";
import { InputField } from "..";

const Register = ({ fields, onLoginClick, onSubmit }) => (
	<div id={"register-page"}>
		<img src='/logo192.png' alt='logo' className='logo' />
		<Form className='register-form' onFinish={onSubmit}>
			<InputField {...fields.username} />
			<InputField {...fields.firstName} />
			<InputField {...fields.lastName} />
			<InputField {...fields.password} />
			<InputField {...fields.confirmation} />
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					{"Submit"}
				</Button>
				<Button type='default' onClick={onLoginClick}>
					{"Login"}
				</Button>
			</Form.Item>
		</Form>
	</div>
);

export default Register;
