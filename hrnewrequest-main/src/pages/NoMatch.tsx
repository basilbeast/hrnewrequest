import Nav from "../components/Nav"

function NoMatch() {
    return (
    <>
      <Nav/>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center">
        <h1 className="text-[200px] font-bold">404</h1>
        <p>Oops! looks like the page you are looking for does not exist.</p>
      </div>
    </>
    )
  }
  
  export default NoMatch