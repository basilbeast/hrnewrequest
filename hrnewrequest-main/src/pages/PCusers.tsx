import Nav from '../components/Nav'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios';

type Inputs = {
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    },
    id: string,
    address: string,
    phone: number,
    property: string
}

function PCusers() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        axios.post('http://localhost:8000/api/PCusers', data).then((response) => {
            console.log(response);
        })
    };
    return (
      <>
        <Nav/>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[700px] bg-white rounded-xl mt-20 p-5 shadow-xl'>
                <h1 className='text-[32px] font-bold p-5'>New PC user</h1>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="flex items-center justify-between">
                        <legend className='text-[12px]'>Name</legend>
                        <input className='border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type="text" placeholder="First Name" {...register("name.firstName")} required/>
                        <input className='border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type="text" placeholder="Middle Name" {...register("name.middleName")}/>
                        <input className='border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type="text" placeholder="Last Name" {...register("name.lastName")} required/>
                    </fieldset>
                    <label className='text-[12px]'>ID<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type="text" placeholder='ID' {...register("id")} required/>
                    </label><br/>
                    <label className='text-[12px]'>Address<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type='textarea' placeholder='address' {...register("address")} required/>
                    </label><br/>
                    <label className='text-[12px]'>Phone Number<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type='textarea' placeholder='Phone Number' {...register("phone")} required/>
                    </label><br/>
                    <label className='text-[12px]'>Property<br/>
                        <input className='w-full text-[16px] border-solid border-slate-300 border-2 rounded-xl p-2 focus:outline-none' type='textarea' placeholder='Property' {...register("property")} required/>
                    </label><br/>
                    <button className='bg-emerald-500 text-white px-5 py-2 mt-10 rounded-xl shadow-lg hover:bg-emerald-300 active:shadow-none active:translate-y-1'>Submit</button>
                </form>
            </div>
        </div>
      </>
    )
  }
  
  export default PCusers