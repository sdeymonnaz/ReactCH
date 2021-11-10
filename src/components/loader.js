import React from "react";

const [loading, setLoading] = useState(true);

handleLoader = () => {
    setLoading(false);
}


export const Loader = (loading) => {
  return (
    <div className="container">
        loading ? ( <h1>Loading...</h1> ) : (null)
        <button onClick={handleLoader}>Mostrar/Ocultar</button>
    </div>
  );
}