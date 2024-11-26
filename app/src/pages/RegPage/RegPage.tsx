import { FC, useState } from "react"
// import { useNavigate } from "react-router-dom";
import {api} from '../../api/api';
import { Button, Card, Input, Layout, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const { Content } = Layout;

export const RegPage:FC = () => {

	const [name, setUserName] = useState<string>("");
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const navigate = useNavigate();

	const handleSignup = async (name: string, email:string, password:string) => {
		await api
		.post('user/registration', {
			name,
			email,
			password
		})
		.then((response) => {
			if (response.statusText === 'OK') {
				navigate('/');
				console.log(response)
			}
		})
	}

	return(
		<Layout>
			<Content>
				<Card>
					<Title>
						registration
					</Title>

					<Input
						id="reg_user_name"
						placeholder="name"
						onChange={({target}) => setUserName(target.value)}
						value={name}
					/>

					<Input
						id="reg_email"
						placeholder="email"
						onChange={({target}) => setEmail(target.value)}
						value={email}
					/>

					<Input
						id="reg_password"
						placeholder="password"
						onChange={({target}) => setPassword(target.value)}
						type="password"
						value={password}
					/>

					<Button
						onClick={() => handleSignup(name, email, password)}
					>
						reg
					</Button>

				</Card>
			</Content>
		</Layout>
	)
}
