import Nav from '../components/Nav'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios';

type Inputs = {
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    },
    userType: string,
    id: string,
    jobTitle: string,
    department: string,
    email: string,
    systemUserName: string,
    mainGeneralRights: string
}

function Opera() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        axios.post('http://localhost:8000/api/Email', data).then((response) => {
            console.log(response);
        })
    };
    return (
      <>
        <Nav/>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[700px] bg-white rounded-xl mt-20 p-5 shadow-xl'>
                <h1 className='text-[32px] font-bold p-5'>Opera</h1>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="flex items-center justify-between">
                        <legend className='text-[12px]'>Name</legend>
                        <input className='border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type="text" placeholder="First Name" {...register("name.firstName")} required/>
                        <input className='border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type="text" placeholder="Middle Name" {...register("name.middleName")}/>
                        <input className='border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type="text" placeholder="Last Name" {...register("name.lastName")} required/>
                    </fieldset>
                    <label className='text-[12px]'>User Type<br/>
                        <select className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none'>
                            <option value="New User">New User</option>
                            <option value="Existing User">Existing User</option>
                        </select>
                    </label><br/>
                    <label className='text-[12px]'>ID<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type="text" placeholder='ID' {...register("id")} required/>
                    </label><br/>
                    <label className='text-[12px]'>Job Title<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type='text' placeholder='Job Title' {...register("jobTitle")} required/>
                    </label><br/>
                    <label className='text-[12px]'>Department<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type='text' placeholder='Department' {...register("department")} required/>
                    </label><br/>
                    <label className='text-[12px]'>Email<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type='text' placeholder='Email' {...register("email")} required/>
                    </label><br/>
                    <label className='text-[12px]'>System User Name<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type='text' placeholder='System User Name' {...register("systemUserName")} required/>
                    </label><br/>
                    <label className='text-[12px]'>Main General Rights<br/>
                        <textarea className='w-full h-[100px] text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' placeholder='Main General Rights' {...register("mainGeneralRights")} required/>
                    </label><br/>
                    <button className='bg-emerald-500 text-white px-5 py-2 mt-10 rounded-xl shadow-lg hover:bg-emerald-300 active:shadow-none active:translate-y-1'>Submit</button>
                </form>
            </div>
        </div>
      </>
    )
  }
  
  export default Opera