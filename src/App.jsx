import { useState } from 'react'
import { Route, Routes } from "react-router"
import { ConfigProvider, Layout, Typography } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import './App.css'

import NavBar from './components/NavBar'
import Home from './pages/Home'
import MailboxesList from './pages/MailboxesList'
import CreateMailbox from './pages/CreateMailbox'
import MailboxDetails from './pages/MailboxDetails'
import LetterForm from './pages/LetterForm'

const { Content, Header } = Layout
const { Title } = Typography

const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  const handleAddMailbox = async (newMailboxData) => {
    try {
      const newId = mailboxes.length + 1
      const newMailbox =  {
        _id: newId,
        ...newMailboxData
      }
      
      await setMailboxes([...mailboxes, newMailbox])
      
      console.log('Mailboxes (After): ', [...mailboxes, newMailbox]);
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddLetter = async (newLetterData) => {
    try {
      const newLetter =  {
        _id: crypto.randomUUID(),
        ...newLetterData
      }
      
      await setLetters([...letters, newLetter])
      
      console.log('Letters (After): ', [...letters, newLetter]);
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 8,
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '0 24px',
            backgroundColor: '#001529',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            zIndex: 1
          }}
        >
          <Title level={3} style={{ color: '#ffffff', margin: 0 }}>
            <MailOutlined style={{ marginRight: 12 }} />
            Post Office
          </Title>
          <NavBar />
        </Header>

        <Content style={{ padding: '24px', backgroundColor: '#f5f5f5' }}>
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
              path="/mailboxes/newletter"
              element={< LetterForm handleAddLetter={handleAddLetter} letters={letters} mailboxes={mailboxes} />}
            />

            <Route
              path="/mailboxes/:mailboxId"
              element={< MailboxDetails mailboxes={mailboxes} letters={letters} />}
            />

            <Route
              path="*"
              element={
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                  <Title level={2}>404: Page Not Found</Title>
                </div>
              }
            />
          </Routes>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App;



















// import { useEffect, useState } from 'react'
// import { Route, Routes } from "react-router"
// import { Button } from 'antd'
// import { Layout, Typography } from 'antd'
// import './App.css'

// import NavBar from './components/NavBar'
// import Home from './pages/Home'
// import MailboxesList from './pages/MailboxesList'
// import CreateMailbox from './pages/CreateMailbox'
// import MailboxDetails from './pages/MailboxDetails'
// import LetterForm from './pages/LetterForm'



// const App = () => {

//   const { Content, Header } = Layout
//   const { Title } = Typography

//   const [mailboxes, setMailboxes] = useState([])
//   const [letters, setLetters] = useState([])

//   const handleAddMailbox = async (newMailboxData) => {
//     try {
//       const newId = mailboxes.length + 1
//       const newMailbox =  {
//         _id: newId,
//         ...newMailboxData
//       }
      
//       await setMailboxes([...mailboxes, newMailbox])
      
//       console.log('Mailboxes (After): ',mailboxes);
      
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const handleAddLetter = async (newLetterData) => {
//     try {
//       const newLetter =  {
//         _id: crypto.randomUUID(),
//         ...newLetterData
//       }
      
//       await setLetters([...letters, newLetter])
      
//       console.log('Letters (After): ',letters);
      
//     } catch (error) {
//       console.log(error)
//     }
//   }


//   return (
//     <Layout className="app-layout">
//       <Header className="site-header">
//         <div className="header-inner">
//           <Title level={2} className="site-title">
//             Post Office
//           </Title>
//           <NavBar />
//         </div>
//       </Header>

//       <Content className="site-content">
//         <Routes>
//           <Route
//             path="/"
//             element={< Home />}
//           />

//           <Route
//             path="/mailboxes"
//             element={< MailboxesList mailboxes={mailboxes}/>}
//           />

//           <Route
//             path="/mailboxes/new"
//             element={< CreateMailbox handleAddMailbox={handleAddMailbox} mailboxes={mailboxes}/>}
//           />
//           <Route
//             path="/mailboxes/newletter"
//             element={< LetterForm handleAddLetter={handleAddLetter} letters={letters} mailboxes={mailboxes} />}
//           />

//           <Route
//             path="/mailboxes/:mailboxId"
//             element={< MailboxDetails mailboxes={mailboxes} letters={letters} />}
//           />


//           <Route
//             path="*"
//             element={<>
//               <h1>
//                 404: Page Not Found
//               </h1>
//             </>}
//           />
//         </Routes>
//       </Content>
//     </Layout>
//   )
// }
// export default App;
