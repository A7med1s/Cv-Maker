import {Routes,Route} from 'react-router-dom'

import { BrowserRouter } from 'react-router-dom'
import EntryPage from './pages/EntryPage'
import StartPage from './pages/StartPage'
import PDFStyleOne from './pages/PDFStyleOne'
import PDFStyleTwo from './pages/PDFStyleTwo'
import PageExamples from './pages/PageExamples'
function App() {

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<StartPage/>}/>
  <Route path='/enter-data' element={<EntryPage/>}/>
  <Route path='/examples' element={<PageExamples/>}/>
  <Route path='/pdf-one' element={<PDFStyleOne/>}/> 
  <Route path='/pdf-two' element={<PDFStyleTwo/>}/> 
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
