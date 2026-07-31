
import { Button, Space } from 'antd'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <nav>
      <Space wrap>
        <Link to="/">
          <Button type="primary" className="nav-button">Home</Button>
        </Link>
        <Link to="/mailboxes">
          <Button type="primary" className="nav-button">Mailboxes</Button>
        </Link>
        <Link to="/mailboxes/new">
          <Button type="primary">New Mailbox</Button>
        </Link>
        <Link to="/mailboxes/newletter">
          <Button type="primary">New Letter</Button>
        </Link>
      </Space>
    </nav>
  )
}

export default NavBar