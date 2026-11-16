import { useState } from "react";

const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [rem, setRem] = useState(false)
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()

        if (email === "" || password === "") {
            alert("Required all field")
        }else if(password !=cpassword){
alert("Password Does Not Match")
        }else{
              let obj = {
            email: email,
            password: password,
            RememberMe: rem
        }
        console.log('====================================');
        console.log(obj);
        console.log('====================================');
        setEmail("")
        setPassword("")
        setRem(false)
        setCpassword("")
        }

      
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form >

                        <div class="mb-3 mt-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={handleEmail} value={email} />
                        </div>
                        <div class="mb-3">
                            <label for="pwd" class="form-label">Password:</label>
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" value={password} onChange={handlePassword} />
                        </div>
                          <div class="mb-3">
                            <label for="cpwd" class="form-label">Confirm Password:</label>
                            <input type="password" class="form-control" id="cpwd" placeholder="Enter Confirm password" name="pswd" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} />
                        </div>
                        <div class="form-check mb-3">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember" value={rem} onChange={(e) => setRem(e.target.checked)}
                                /> Remember me
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}


export default Home;