import Nav from '../components/Nav'

function Home() {
    return (
      <>
        <Nav/>
        <div className='h-80 flex flex-col justify-around'>
          <table className='w-1/2 self-center border border-collapse border-slate-300 rounded-xl overflow-hidden'>
            <thead className='bg-slate-300'>
              <tr>
                <th className='border border-collapse border-slate-300'>Id</th>
                <th className='border border-collapse border-slate-300'>type</th>
                <th className='border border-collapse border-slate-300'>Changed by</th>
                <th className='border border-collapse border-slate-300'>date and time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border border-collapse border-slate-300'>01</td>
                <td className='border border-collapse border-slate-300'>Opera</td>
                <td className='border border-collapse border-slate-300'>mazin</td>
                <td className='border border-collapse border-slate-300'>21-12-23 10:10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
  
  export default Home
  