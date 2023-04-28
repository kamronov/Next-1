import Header from './header'
import Footer from './footer'
const Layout = ({children})=>{
    return(
        <div className='con'>
            <Header/>
            {children}
            <Footer/>
        </div>
    )

}
export default Layout;