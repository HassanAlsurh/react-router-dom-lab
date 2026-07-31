import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router"
import { Button } from 'antd'
import { Layout, Typography } from 'antd'
import './App.css'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import MailboxesList from './pages/MailboxesList'
import CreateMailbox from './pages/CreateMailbox'
import MailboxDetails from './pages/MailboxDetails'



const App = () => {

  const { Content, Header } = Layout
  const { Title } = Typography

  const [mailboxes, setMailboxes] = useState([])

  const handleAddMailbox =  (newMailboxData) => {
    try {
      const newId = mailboxes.length + 1
      const newMailbox =  {
        _id: newId,
        ...newMailboxData
      }
      
      setMailboxes([...mailboxes, newMailbox])
      
      console.log(mailboxes);
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Layout className="app-layout">
      <Header className="site-header">
        <div className="header-inner">
          <Title level={2} className="site-title">
            Mailbox Directory
          </Title>
          <NavBar />
        </div>
      </Header>

      <Content className="site-content">
        <Routes>
          <Route
            path="/"
            element={< Home />}
          />

          <Route
            path="/mailboxes"
            element={< MailboxesList mailboxes={mailboxes}/>}
          />

          <Route
            path="/mailboxes/new"
            element={< CreateMailbox handleAddMailbox={handleAddMailbox} mailboxes={mailboxes}/>}
          />

          <Route
            path="/mailboxes/:mailboxId"
            element={< MailboxDetails mailboxes={mailboxes} />}
          />


          <Route
            path="*"
            element={<>
              <h1>
                404: Page Not Found
              </h1>
            </>}
          />
        </Routes>
      </Content>
    </Layout>
  )
}
export default App;
