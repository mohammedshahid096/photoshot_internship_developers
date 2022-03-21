import React from 'react'

export default function Logindiv() {
  return (
    <div className="col-sm-3 login offset-sm-1 ">
        <center>
            <h3>Log IN</h3>
        </center>
            <form action="/">
                <br/><br/>
                <div className="row">
                    <div className="col">
                        <label for="/">Email</label>
                        <center> <input type="email" /></center>
                        <br/><br/>
                        <label for="/">password</label>
                        <center><input type="password"/><i className="material-icons eye">visibility</i></center>
                        <br/>
                        <div >
                            <input type="checkbox" id="checkbox" name="/" />
                            <span className="rememberme"> Remember me</span>
                            &nbsp;&nbsp;
                            <a href="/" className="rememberme">Forgot password</a>
                            <br/><br/>
                            <center> <button>Log In</button></center>

                        </div>
                    </div>
                </div>
            </form>
    </div>
  )
}
