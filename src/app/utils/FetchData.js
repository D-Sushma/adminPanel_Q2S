
export default function FetchData() {
    let results = [];
    fetch('http://localhost:4000/join')
        .then((response) => {
            console.log(' JOIN response');
            return response.json();
        })
        .then((data) => {
            results =  data
            // console.log('inside JOIN data', data);
            // setJoin(data.response);
        })
        return results
}
