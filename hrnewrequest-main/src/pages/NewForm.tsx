import Nav from '../components/Nav'
function Approvals() {
    return (
      <>
        <Nav/>
        <div className='w-[600px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-5'>
            <a href='/Email' className='w-full bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none'>Email</a>
            <a href='/Extension' className='w-full bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none'>Extension</a>
            <a href='/MC' className='w-full bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none'>MC</a>
            <a href='/Opera' className='w-full bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none'>Opera</a>
            <a href='/PCUsers' className='w-full bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none'>PC user</a>
            <a href='/NewUser' className='w-full bg-black text-slate-50 text-[15px] rounded-xl p-2 focus:outline-none'>New user</a>
        </div>
      </>
    )
  }
  
  export default Approvals