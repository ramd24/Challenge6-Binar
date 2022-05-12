import React from 'react'
import style from './pages.module.css'
import carimg from '../img/backgroundlogin.png'

const Register = () => {
  return (
    <div className='content'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-9'>
                    <img src={carimg} className={style.imgFluid} />
                </div>
                <div className={`col-md-3 ${style.contents} text-start`}>
                    <div className={`${style.box} mb-4`}></div>
                    <h3 className="mb-5">Create New Account</h3>
                        <form action="#" method="post">
                            <div className="form-group first">
                                <label for="username" className="mb-3">Username</label>
                                <input type="text" className="form-control mb-3" id="username" />
                            </div>
                            <div className="form-group last mb-4">
                                <label for="password" className="mb-3">Password</label>
                                <input type="password" className="form-control mb-3" id="password" />
                            </div>
                            <input type="submit" value="Sign Up" className={`${style.btn} btn-block btn-primary`} />
                            <div className={style.textSignUp}>Already have an account? <a href='#'> Login</a></div>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register