import React, { useEffect, useState } from 'react';

const AddPorduct = () => {
    const [division, setDivision] = useState('Dhaka')
    const [allDivision, setAllDivision] = useState([])
    const [distic, setDistic] = useState('')
    const [postThana, setPostThana] = useState('')
    const [value, setValue] = useState([])
    const [thana, setThana] = useState([])

    const [file, setfile] = useState()
    const [file2, setfile2] = useState()
    const [file3, setfile3] = useState()

    useEffect(() => {
        fetch(`https://bdapis.com/api/v1.1/division/${division}`)
            .then(res => res.json())
            .then(data => setValue(data.data))
    }, [division])

    useEffect(() => {
        fetch(`https://bdapis.com/api/v1.1/divisions`)
            .then(res => res.json())
            .then(data => setAllDivision(data.data))
    }, [])



    const hadelDisitic = (e) => {
        let upozela = (value.find(v => v.district === e.target.value))
        setThana(upozela)
        setDistic(e.target.value);
    }
    const hadelimg1 = (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.append('image', image)
        console.log(formData);
        console.log(process.env.REACT_APP_KEY);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_KEY}`
        fetch(url, {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(data => {
                const photoURL = data.data.display_url
                setfile(photoURL);

            })

    }
    console.log(file);

    const handelsubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const rent = form.rent.value;
        const phoneNumber = form.phoneNumber.value;
        const img = file
        const img2 = file2
        const img3 = file3
        const areaDivison = division
        const areaDistic = distic
        const areaThana = postThana
        console.log(title, rent, phoneNumber, areaDivison, areaDistic, areaThana)
    }

    return (
        <div className='p-4 border shadow-md rounded-xl'>
            <div>
                <h2 className='text-center text-3xl font-bold py-4 '>Upoad Your Rent Details</h2>
            </div>
            <form onSubmit={handelsubmit}>
                <div>
                    <div>
                        <p className='text-black mb-2 mt-2'> Your Title </p>
                    </div>
                    <div>
                        <input required name='title' type="text" placeholder='example 2 bedroom and 1 washroom  ' className='px-4 py-2 w-full mb-2 border rounded-2xl' />
                    </div>
                    <div>
                        <p className='text-black mb-2 mt-2'>Select Your Area </p>
                    </div>
                    <select required onChange={(e) => setDivision(e.target.value)} className='px-4 py-2 border mr-2' name="" id="">
                        <option value="" selected disabled>select Division</option>
                        {
                            allDivision.map((d, idx) => <option key={idx} value={d.division}>{d.division}</option>)
                        }
                    </select>
                    <select required onChange={(e) => hadelDisitic(e)} className='px-4 py-2 border '>
                        <option value="" selected disabled>select distic </option>
                        {
                            value.map((v, idx) =>
                                <option value={v.district} key={idx}>{v.district}</option>
                            )
                        }
                    </select>
                    <select required onChange={(e) => setPostThana(e.target.value)} className='px-4 py-2 border ml-2'>
                        <option value="" selected disabled>select thana </option>
                        {
                            thana.upazilla?.map((up, idx) => <option value={up} key={idx}>{up}</option>)
                        }
                    </select>
                    <div>
                        <p className='text-black mb-2 mt-4'> Your Rent </p>
                    </div>
                    <div>
                        <input required name='rent' type="text" placeholder='set you rent $ ' className='px-4 py-2 w-full mb-2 border rounded-2xl ' />
                    </div>
                    <div>
                        <p className='text-black mb-2 mt-4'> Your Phone Number </p>
                    </div>
                    <div>
                        <input required name='phoneNumber' type="text" placeholder='enter your phone number' className='px-4 py-2 w-full mb-2 border rounded-2xl ' />
                    </div>
                    <div className='flex lg:flex-row flex-col gap-2 border p-2 rounded-2xl mt-2 mb-2'>
                        <div>
                            <input onChange={(e) => hadelimg1(e)} name='img1' required type="file" />
                            <div>
                               {
                                file ?<img className='w-20 h-20' src={file} alt="" />:<p> upload Image 1</p>
                               }
                                
                            </div>
                        </div>
                        <div>
                            <input name='img2' required type="file" />
                            <div className='w-20 mt-2 h-20 border'>
                                <p>Image 2</p>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div>
                            <input name='img3' required type="file" />
                            <div className='w-20 mt-2 h-20 border'>
                                <p>Image 2</p>
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='px-4 w-full py-2 bg-green-600 text-white  hover:bg-green-900 duration-700 ease-in rounded-2xl mt-2'>Save</button>
                </div>
            </form>


        </div>
    );
};

export default AddPorduct;