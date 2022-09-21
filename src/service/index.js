import axios from 'axios';

const baseUrl = '/api'
export async function syncProcess(key, process){
    try {
        axios.post(baseUrl, {key, process});
    } catch (error) {
        alert(error);
        console.log('出现异常');
    }
}
export async function getProcess(){
    try {
        const result = await axios.get('/api');
        if(result.status === 200){
            return result.data
        }
    } catch (error) {
        
    }
}
