import React from 'react'








const App = () => {
  return (
    <>
  <BrowserRouter>

<nav>

<Link to="/">Home</Link>
<Link to="/about"> About</Link>
<Link to="/contact">Contact</Link>
</nav>

<Routes>
<Route path="/" element={<HomePage></HomePage>} />
<Route path="/about" element={<AboutPage></AboutPage>} />
<Route path="/contact" elenent={<ContactPage></ContactPage>} />

</Routes>

</BrowserRouter>
   
    </>
  )
}

export default App