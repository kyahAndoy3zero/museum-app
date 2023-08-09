import { useQuery, useMutation, QueryClient } from 'react-query';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getUserToken } from "../../../components/util/localStorageUtils"


const API_URL = "http://127.0.0.1:5000/api/v1/artifact"

const storedToken = getUserToken();

const queryClient = new QueryClient();

const config = {
    headers: {
        Authorization: `Bearer ${storedToken}`,
    },
}



export const useFetchArtifacts = (page) => {
    return useQuery(['artifact', page], async () => {
        const response = await axios.get(`${API_URL}?page=${page}`, config)
        return response.data
    }, {
        onSuccess: () => {
            console.log('Successfully fetched')
        },
        onError: (error) => {
            console.log('Failed to fetch', error)
        },
        onSettled: () => {
            queryClient.invalidateQueries('artifact');
        },
        staleTime: 10000 //
    });
}



export const useFetchSearchArtifact = (accessionId) => {
    return useQuery(['artifact', accessionId], async () => {
        const response = await axios.get(`${API_URL}?objectIdNo=${accessionId}`, config)
        return response.data
    }, {
        onSuccess: () => {
            console.log('Successfully fetched')
        },
        onError: (error) => {
            console.log('Failed to fetch', error)
        },

        enabled: Boolean(accessionId),


    })
}




export const useFetchArtifact = (id) => {

    return useQuery(['artifact', id], async () => {
        const response = await axios.get(`${API_URL}/${id}`, config);

        return response.data
    }, {
        onSuccess: () => {
            console.log('Successfully fetched artifact')
        },
        onError: (error) => {
            console.log('Failed to fetch artifact:', error)
        },

    })
}


export const useFetchgetArtifactByYearCollected = (year) => {

    return useQuery(['year-collected', year], async () => {
        const response = await axios.get(`${API_URL}?yearCollected=${year}`, config)
        return response.data
    }, {
        onSuccess: () => {
            console.log('Successfully fetched')
        },
        onError: (error) => {
            console.log('Failed to fetch', error)
        },
    })
}


export const useFetchgetArtifactsOverview = () => {
    return useQuery(['overview'], async () => {
        const response = await axios.get(`${API_URL}/artifacts-overview?sort=catalogue_year`, config)
        return response.data
    }, {
        onSuccess: () => {
            console.log('Successfully fetched')
        },
        onError: (error) => {
            console.log('Failed to fetch', error)
        },
    })
}





export const useDeleteArtifactMutation = () => {

    return useMutation((id) => axios.delete(`${API_URL}/${id}`, config), {
        onSuccess: () => {
            console.log('Artifact deleted successfully!')
            queryClient.invalidateQueries('artifact');
            toast.success('Artifact deleted successfully!', { position: "top-center" });
        },
        onError: () => {
            console.log('Failed to delete artifact')
            toast.error('Failed to delete artifact', { position: "top-center" });
        },
    });
}


export const useUpdateArtifactMutation = () => {
    return useMutation(({ data, id }) => axios.patch(`${API_URL}/${id}`, data, config), {
        onSuccess: () => {
            toast.success('Successfully updated artifact', { position: 'top-center' });
            queryClient.invalidateQueries('artifact');
        },
        onError: (error) => {
            toast.error('Failed to update artifact: ' + error.message, { position: 'top-center' });
        },
    })
}


export const useCreateArtifactMutation = () => {
    return useMutation((data) => axios.post(`${API_URL}`, data, config), {
        onSuccess: () => {
            toast.success('Artifact Added', { position: 'top-center' });
        },
        onError: (error) => {
            toast.error(`${error.response.data.error.code === 11000 ? 'Artifact already exist' : error.response.data.error.code}`, { position: 'top-center' });
        },
        onSettled: () => {
            queryClient.invalidateQueries('artifact');
        },

    })
}

export const useDownloadFile = () => {

    return useMutation(async (file) => {
        const downloadUrl = `${API_URL}/download/${file}.xlsx`;

        const response = await axios({
            url: downloadUrl,
            method: 'GET',
            responseType: 'blob',
            headers: config.headers,
        });

        const downloadLink = document.createElement('a');
        const url = window.URL.createObjectURL(new Blob([response.data]));
        downloadLink.href = url;
        downloadLink.setAttribute('download', `${file}.xlsx`);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }, {
        onSuccess: () => {
            console.log('Download completed');
        },
        onError: (error) => {
            console.log('Failed to download', error);
        },
    });
}



