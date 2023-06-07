import React, { useState } from "react";

function Login({ }) {

    return (
        <>
            <form>
                <div>
                    <img src="" alt="" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary" href="Paint.jsx">Submit</button>
            </form>
        </>
    );
}

export default Login;
