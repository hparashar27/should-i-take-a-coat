import Footer from './footer'

export default function Layout({ children }) {
    return (<>
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