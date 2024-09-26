import React from 'react'
import Job from './Job'
import Navbar from './shared/Navbar';
// import store from '@/redux/store';
import { useSelector } from 'react-redux';


const Browse = () => {
    // const {allJobs} = useSelector(store=>store.job);
    const randomJob=[1,2,3];
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-10 my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({randomJob.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        randomJob.map((job) => {
                            return (
                                <Job key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse