import { useEffect, useState } from "react";
import { GalaxyService } from "../services";


type TSatelliteData = {
  message: Array<string>;
  position: {
    x:number;
    y:number;
  };
}

type TGalaxyHook = {
  satellite?: string;
  callSpacecraft?: boolean;
};

const UseGalaxyApiHook = ({satellite = '', callSpacecraft}: TGalaxyHook) => {
  const [data, setData] = useState<TSatelliteData>({
    message: [],
    position: {
      x: 0,
      y: 0
    },
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSatellite = async() => {
    try {
      const response = await GalaxyService.getSatellitePosition(satellite);
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }
  
  const getSpaceCraft = async() => {
    const spaceCraftDataInfo = {
      satellites: [{
          name: 'kenobi',
          distance: 100.0,
          message: ["este", "", "", "mensaje", ""]
        },
        {
        name: "skywalker",
        distance: 115.5,
        message: ["", "es", "", "", "secreto"]
        },
        {
        name: "sato",
        distance: 142.7,
        message: ["este", "", "un", "", ""]
        }
        ]
    };
    try {
      const response = await GalaxyService.getTopSecret(spaceCraftDataInfo);
      setData(response.data);   
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(satellite !== '') {
      getSatellite();
    }
    if(callSpacecraft) {
      getSpaceCraft();
    }
  },[satellite, callSpacecraft]);
  
  return {data, loading, error };
}

export default UseGalaxyApiHook;