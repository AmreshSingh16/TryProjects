import React  , {useState} from "react";


function SignUp() {

    const [credentials , setcredentials] = useState({name:"" , email:"" , password:""})

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/createuser" , {
            method:'POST',
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body:JSON.stringify({
                name:credentials.name,
                email:credentials.email,
                password : credentials.password
            })
        })

        const res = await response.json()
        console.log(res)

        if(!res.success){
            alert("Invalid Credentials")
        }
    }

    const handleChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-50">
                    <div className="row d-flex justify-content-center align-items-center h-50">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" > 

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" name ='name' value={credentials.name} onChange={handleChange}/>
                                                        <label className="form-label" htmlFor="name">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control"  name ='email' value={credentials.email} onChange={handleChange}/>
                                                        <label className="form-label" htmlFor="email">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" name ='password' value={credentials.password} onChange={handleChange} />
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" />
                                                        <label className="form-label" htmlFor="passwordRepe">Repeat your password</label>
                                                    </div>
                                                </div>

                                                

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="something" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;