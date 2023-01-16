import Footer from './footer'
import  Header  from './header'
export default function Layout({ children }) {
    return (<>
        <Header/>
        <div className="h-screen lg:flex flex-wrap justify-between">
            <main className="flex-1">
               {children}
            </main>
        </div>
        <div>
            <Footer/>
        </div>
    </>
    );
}