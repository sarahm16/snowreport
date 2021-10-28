import axios from 'axios';
import getCentralTime from './centralTimeZone';

function savePdf(data) {
    
    //GETS DATE AND TIME IN CENTRAL TIME ZONE
    let centralTime = getCentralTime();
    
    axios.post(`Transblue/salestoops/_api/web/GetFolderByServerRelativeUrl('/Transblue/salestoops/Contracts/Snow Reports')/Files/add(url='${centralTime} A.pdf',overwrite=true)`, data, {
        headers: {
        "accept": "application/json;odata=verbose"
        }
    })
    .catch(err => console.log(err))
}

export default savePdf;