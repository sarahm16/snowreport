import axios from "axios";

function sendSuccessEmail(centralTime) {
    let data = JSON.stringify({  
        'properties': {'__metadata': { 'type': 'SP.Utilities.EmailProperties' },  
        'From': 'no-reply@transblue.org',  
        'To': { 'results': ['snow@transblue.org'] },  
        'Body': `A new snow report was generated and saved for ${centralTime}.
                 View in FM sharepoint under Snow Reports folder`,  
        'Subject': 'Snow Report Generated'}
    })      
    axios.post('/_api/SP.Utilities.Utility.SendEmail', data, {
      headers: {
        "accept": "application/json;odata=verbose",
        "Content-Type": "application/json;odata=verbose"
      }
    })
}

export default sendSuccessEmail;