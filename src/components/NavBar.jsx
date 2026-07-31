import { Button, Space } from 'antd'
import { Link } from 'react-router'
import { 
  HomeOutlined, 
  InboxOutlined, 
  PlusSquareOutlined, 
  MailOutlined 
} from '@ant-design/icons'

const NavBar = () => {
  return (
    <nav>
      <Space wrap size="middle">
        <Link to="/">
          <Button type="primary" icon={<HomeOutlined />}>
            Home
          </Button>
        </Link>
        <Link to="/mailboxes">
          <Button type="primary" icon={<InboxOutlined />}>
            Mailboxes
          </Button>
        </Link>
        <Link to="/mailboxes/new">
          <Button type="primary" icon={<PlusSquareOutlined />}>
            New Mailbox
          </Button>
        </Link>
        <Link to="/mailboxes/newletter">
          <Button type="primary" icon={<MailOutlined />}>
            New Letter
          </Button>
        </Link>
      </Space>
    </nav>
  )
}

export default NavBar















// import { Button, Space } from 'antd'
// import { Link } from 'react-router'

// const NavBar = () => {
//   return (
//     <nav>
//       <Space wrap>
//         <Link to="/">
//           <Button type="primary" className="nav-button">Home</Button>
//         </Link>
//         <Link to="/mailboxes">
//           <Button type="primary" className="nav-button">Mailboxes</Button>
//         </Link>
//         <Link to="/mailboxes/new">
//           <Button type="primary">New Mailbox</Button>
//         </Link>
//         <Link to="/mailboxes/newletter">
//           <Button type="primary">New Letter</Button>
//         </Link>
//       </Space>
//     </nav>
//   )
// }

// export default NavBar