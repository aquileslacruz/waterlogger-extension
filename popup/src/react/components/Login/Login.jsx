import { Form, Button } from "antd";
import { InputField } from "..";

import "./Styles.scss";

const Login = ({ fields, onSubmit, onRegisterClick }) => (
	<div id={"login-page"}>
		<img src={`${process.env.PUBLIC_URL}/logo192.png`} alt='logo' className='logo' />
		<Form className='login-form' onFinish={onSubmit}>
			<InputField {...fields.username} />
			<InputField {...fields.password} />
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					{"Login"}
				</Button>
				<Button type='default' onClick={onRegisterClick}>
					{"Register"}
				</Button>
			</Form.Item>
		</Form>
	</div>
);

export default Login;
