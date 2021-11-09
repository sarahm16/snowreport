import axios from 'axios';
import getCentralTime from './centralTimeZone';
import sendSuccessEmail from './successEmail';

function savePdf(data, version) {

    console.log('saving pdf')

    //GETS DATE AND TIME IN CENTRAL TIME ZONE
    let centralTime = getCentralTime();
    
    return axios.post(`Transblue/salestoops/_api/web/GetFolderByServerRelativeUrl('/Transblue/salestoops/Contracts/Snow Reports')/Files/add(url='${centralTime} ${version}.pdf',overwrite=true)`, data, {
        headers: {
        "accept": "application/json;odata=verbose"
        }
    })
    .then(res => {
        console.log(res)
        //sendSuccessEmail(centralTime)
    })
    .catch(err => {
        console.log(err)
        //SEND EMAIL TO ME AND JIM IF SAVING PDF FAILS
        let data = JSON.stringify({  
            'properties': {'__metadata': { 'type': 'SP.Utilities.EmailProperties' },  
            'From': 'no-reply@transblue.org',  
            'To': { 'results': ['carters@transblue.org'] },  
            'Body': '',  
            'Subject': 'Snow Report Error - Saving PDF to Sharepoint' }
        })      
        axios.post('/_api/SP.Utilities.Utility.SendEmail', data, {
          headers: {
            "accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose"
          }
        })
    })
}

export default savePdf;