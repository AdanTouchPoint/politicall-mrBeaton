import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params = '', setMp, setSenator, setShowLoadSpin, setShowList,sendMany,setAllDataIn) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params)
   console.log(datos)
    let query = datos.data;
    let fill = await query.map((el) => {
      return el[0];
    });
    setMp(datos.mps);
    setSenator(datos.data)
    setShowLoadSpin(false)
    setShowList(false)

}


export{
    fetchRepresentatives
}
