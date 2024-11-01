import { Footer, Navbar } from "../components"

export const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}
