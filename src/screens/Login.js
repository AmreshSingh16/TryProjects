import React, {useState} from "react";

function Login() {

    const [credentials , setcredentials] = useState({ email:"" , password:""})

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/loginuser" , {
            method:'POST',
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body:JSON.stringify({
                email:credentials.email,
                password : credentials.password
            })
        })

        const res = await response.json()
        console.log(res)

        if(!res.success){
            alert("Incorrect Username or Password")
        }
    }

    const handleChange = (event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <section className="vh-100" style={{backgroundColor: "#508bfc"  }}>
            <div className="container py-3 h-100">
                <div className="row d-flex justify-content-center align-items-center h-80">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" name="email" value={credentials.email} onChange={handleChange}/>
                                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                </div>

                                <div className="form-outline mb-4">
                                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" name="password" value={credentials.password} onChange={handleChange} />
                                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                </div>

                                
                                {/* <div className="form-check d-flex justify-content-start mb-4">
                                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                    <label className="form-check-label" for="form1Example3"> Remember password </label>
                                </div> */}

                                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>Login</button>

                                <hr className="my-4" />

                                    <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor: "#dd4b39"}}
                                        type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
                                    <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor: "#3b5998"}}
                                        type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;