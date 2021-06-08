import React from 'react';
import './login.css';

function Login(){
    return(
        <div className="login-content d-flex align-items-center">
        <main className="form-signin mx-auto">
        <form>
            {/* <img className="mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
            <h1 className="h3 mb-3 fw-normal text-center">Login</h1>

            <div className="form-floating">
            <input type="email" className="form-control my-2" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me" /> Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

            <div className="msg-login text-white text-center">
                <span><strong>WoW!</strong>Você está logado</span><br/>
                <span><strong>ops!</strong>Verifique se a senh ou usuário está correcto</span>
                
            </div>

            <a href="#" className="text-muted max-2">Recuperar Senha</a><br/>
            <a href="#" className="text-muted max-2">Cadastra-se</a>
        </form>
        </main>
        </div>
    )
}

export default Login;