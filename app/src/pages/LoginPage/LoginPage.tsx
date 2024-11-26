import { Button, Card, Input, Layout, Space, Typography } from "antd";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {api} from '../../api/api';


const { Title } = Typography;

const { Content } = Layout;

export const LoginPage:FC  = () =>{

	const navigate = useNavigate();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = async (email: string, password: string) => {
		await api
			.post('user/login', {
				email,
				password,
			})
			.then((res) => {
				if (res.statusText === 'OK') {
					navigate('/');
				}
			})
			.catch((err) => {
				throw new Error(`Failed to fetch user data:\n${err}`);
			});
	};

	return(
		<Layout>
			<Content>
				<Card>
					<Space>
						<Title>
							login
						</Title>
						<Input
							id="login_user_email"
							placeholder="Почта"
							onChange={({ target }) => setEmail(target.value)}
							value={email}
						/>
						<Input
							id="login_user_password"
							placeholder="Пароль"
							onChange={({ target }) => setPassword(target.value)}
							value={password}
							type="password"
							name="password"
						/>

						<Button
							className="login__btn"
							onClick={() => handleSubmit(email, password)}
						>
							Войти
						</Button>
					</Space>
				</Card>
			</Content>
		</Layout>
	)
}
