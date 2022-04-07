import { Menu } from 'antd'; 
import {styles } from 'antd/dist/antd.css';
import { AppstoreOutlined, MailOutlined, SettingOutlined, MenuOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

const Dashboard =()=>{
    return (
      <>
     
      <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      >
        <SubMenu key="sub1" icon={<MenuOutlined />} title="Menu de inicio">
          <Menu.ItemGroup key="g1" title="Opciones">
            
            
            <Menu.Item key="1">Trabajadores</Menu.Item>
            <Menu.Item key="2">Inventario</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
           
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Menu de incio">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Configuraciones">
          <Menu.Item key="9">Option 9</Menu.Item>
        
        </SubMenu>
      </Menu>
      </>
    );
  
}

export default Dashboard;