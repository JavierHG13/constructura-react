import React from 'react';
import '../estilos/formLogin.css'

export const FormLogin = () => {
    return (
        <div>
            <form className="form">
                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
                        <g data-name="Layer 3" id="Layer_3">
                            <path d="M30.853 13.87a15 15 0 0 0-29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0-1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1-4.158-.759V8.115a1 1 0 0 0-2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6z"></path>
                        </g>
                    </svg>
                    <input placeholder="Enter your Email" className="input" type="text" />
                </div>

                <div className="flex-column">
                    <label>Password</label>
                </div>
                <div className="inputForm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
                        <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.523 48 48v224c0 26.476-21.547 48-48 48zM48 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16z"></path>
                        <path d="M304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
                    </svg>
                    <input placeholder="Enter your Password" className="input" type="password" />
                </div>

                <div className="flex-row">
                    <div>
                        <input type="radio" />
                        <label>Remember me</label>
                    </div>
                    <span className="span">Forgot password?</span>
                </div>
                <button className="button-submit">Sign In</button>
                <p className="p">
                    Don't have an account? <span className="span">Sign Up</span>
                </p>
                <p className="p line">Or With</p>

                <div className="flex-row">
                    <button className="btn google">
                        <svg
                            xmlSpace="preserve"
                            style={{ enableBackground: 'new 0 0 512 512' }}
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            version="1.1"
                        >
                            <path
                                d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014l57.992 10.632 25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456 0 27.092 3.404 45.097 9.649 61.708z"
                                fill="#FBBB00"
                            ></path>
                            <path
                                d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911H266.337V208.176h138.887l92.303.012z"
                                fill="#518EF8"
                            ></path>
                            <path
                                d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818z"
                                fill="#28B446"
                            ></path>
                            <path
                                d="M419.404 58.936l-82.933 67.896c-23.335-14.586-50.919-23.012-80.471-23.012C190.271 103.82 133.571 146.777 113.035 206.544l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                                fill="#F14336"
                            ></path>
                        </svg>
                        Google
                    </button>
                    <button className="btn apple">
                        <svg
                            xmlSpace="preserve"
                            style={{ enableBackground: 'new 0 0 22.773 22.773' }}
                            viewBox="0 0 22.773 22.773"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            version="1.1"
                        >
                            <path d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573C11.244 3.665 11.853 2.554 12.598 1.687 13.292.879 14.557.16 15.769 0z"></path>
                            <path d="M20.67 16.716c0 .016 0 .03 0 .045-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926-.155 0-.31 0-.462 0-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276 0-.34 0-.679 0-1.019.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74 1.091 1.677 2.359 2.953 3.943 3.705z"></path>
                        </svg>
                        Apple
                    </button>
                </div>
            </form>
        </div>
    );
};
