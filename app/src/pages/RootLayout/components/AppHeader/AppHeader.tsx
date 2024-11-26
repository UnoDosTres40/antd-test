import { Breadcrumb,  Button,  Layout, Menu, theme } from 'antd';
import { Typography } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';



const { Title } = Typography;

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export const AppHeader:FC = () => {

	const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

	const navigate  = useNavigate();

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

				<Button
					variant='text'
					onClick={() => navigate('/login')}
				>
					login
				</Button>

				<Button
					variant='text'
					onClick={() => navigate('/reg')}
				>
					registration
				</Button>

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
