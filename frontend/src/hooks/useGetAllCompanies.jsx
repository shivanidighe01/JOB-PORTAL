import { setCompanies} from '@/redux/companySlice'
import { COMPANY_API_END_POINT} from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/v1/company/get', { withCredentials: true });
                // console.log('called');
                // console.log(res);

                if (res.data.success) {
                    dispatch(setCompanies(res.data.companies));
                } else {
                    console.log("Fetch unsuccessful:", res.data.message);
                }
            } catch (error) {
                console.log('Error fetching companies:', error);
            }
        };
        fetchCompanies();
    }, [dispatch]); // Add dispatch as a dependency
};

export default useGetAllCompanies;


