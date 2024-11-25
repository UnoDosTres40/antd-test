import { Breadcrumb, Button, Input, Layout, Menu, theme } from 'antd';
import { Typography } from 'antd';
import { FC, useState } from 'react';
import {api} from '../../../../api/api';
import { useNavigate } from 'react-router-dom';


const { Title } = Typography;

const { Header, Content, Footer } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export const AppHeader:FC = () => {

	const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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
					navigate('/log');
				}
			})
			.catch((err) => {
				throw new Error(`Failed to fetch user data:\n${err}`);
			});
	};

	return(
		<Layout >
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent:"center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
				/>
      </Header>
      <Content >
        <Breadcrumb >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
						display:"flex",
						justifyContent:"center"
          }}
        >
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
					<Title level={1}>
						hellooo
					</Title>
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        hello
      </Footer>
    </Layout>
	)
};
