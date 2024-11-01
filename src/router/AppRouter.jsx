import { Navigate, Route, Routes } from "react-router-dom"

import { AboutPage, CategoryPage, ContactUsPage, HomePage } from "../pages"
import { AppLayout } from "../layout/AppLayout"


export const AppRouter = () => {
  return ( 
    <AppLayout>

      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="categories" element={ <CategoryPage /> } ></Route>
        <Route path="about" element={ <AboutPage /> } ></Route>
        <Route path="contact" element={ <ContactUsPage /> } ></Route>
        <Route path="/*" element={ <HomePage />} ></Route>
      </Routes>

    </AppLayout>
  )
}
