import React, {useState, useEffect} from "react";


const BuyerForm = () => {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [buyer, setBuyer] = useState({});


const handleSubmit = (e) => {
    e.preventDefault();
    setBuyer({
        name,
        phone,
        email
    });
    setName("");
    setPhone("");
    setEmail("");
}

useEffect(() => {
    console.log(buyer);
}, [buyer]);


    return (
        <div className="container fluid">
            <div className="col-4">
                <h2>Contact Details</h2>
                <hr/>
                <form className="form-group">
                    <input 
                        onChange={(e) => setName(e.target.value)}
                        type="text" className="form-control mb-2" placeholder="Name"
                    />
                    <input 
                        onChange={(e) => setPhone(e.target.value)}
                        type="text" className="form-control mb-2" placeholder="Phone"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" className="form-control mb-2" placeholder="email"
                    />
                    <button onClick={handleSubmit} className="btn btn-primary mb-2">Submit order</button>
                </form>
            </div>
        </div>
    );
};


export default BuyerForm;