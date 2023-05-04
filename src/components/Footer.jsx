

export default function Footer(){

    return (
    <footer className="mt-16 mb-10 md:mt-32 md:mb-5" id="footer">

        <div className="bg-[#f1f6ed] px-5 pt-24 pb-14 mb-10" id="contact">
                <div className="news-paper">
                    <div className="flex flex-col items-center md:items-end mx-10 mb-14 md:mr-24">
                        <div className="mb-10 text-center">
                            <h2 className="text-2xl font-bold mb-2">Subscribe to the newsletter</h2>
                            <p className="text-sm text-slate-500">you will get a 20% discount on your first order</p>

                        </div>
                        <div className="flex items-center flex-wrap gap-4">
                            <div class="bg-white border px-5 py-2.5 rounded-md">

                                <input type="email" name="email" id="email" placeholder="Enter your email" class="input-btn min-w-0"/>

                            </div>
                            <a href="" className="btn hover:text-em">Subscribe</a>
                        </div>
                    </div>    
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-sm">

                    <div className="md:w-[350px] pr-5 md:ml-10">
                        <h2 className="text-primary font-extrabold pb-2">Barber Shop</h2>
                        <p className="pb-5">
                            Welcome to Sam's Barber shop, the one stop shop for all your exquisite and luscious hair styles. Here at Sam's we treat you to a variety of hair products designed to make your hair glow and your appearance brighter. As we like to say, a smart haircut befits a smart person
                        </p>

                        <div className="flex gap-5">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19.83 8v.52A11.41 11.41 0 0 1 8.35 20a11.41 11.41 0 0 1-6.2-1.81h1a8.09 8.09 0 0 0 5-1.73a4 4 0 0 1-3.78-2.8a4.81 4.81 0 0 0 .77.06a4.66 4.66 0 0 0 1.06-.13A4 4 0 0 1 3 9.67a4.13 4.13 0 0 0 1.82.51A4.06 4.06 0 0 1 3 6.77a4 4 0 0 1 .54-2A11.47 11.47 0 0 0 11.85 9a4.71 4.71 0 0 1-.1-.92a4 4 0 0 1 7-2.77a7.93 7.93 0 0 0 2.56-1a4 4 0 0 1-1.78 2.22a7.94 7.94 0 0 0 2.33-.62a8.91 8.91 0 0 1-2 2.09Z"/></svg>
                            </div> {/* <!--Twitter--> */}

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
                            </div> {/*<!--instagram-->*/}

                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2Z"/></svg>
                            </div> {/*<!--Facebook-->*/}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 my-4 sm:my-0">

                        <div className="md:ml-20">
                            
                            <ul>
                                <li className="font-extrabold pb-2">Features</li>
                                <li className="pb-2"><a href="#hero">Home</a></li>
                                <li className="pb-2"><a href="#testimonial">Testimonies</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            
                            <ul>
                                <li className="font-extrabold pb-2">Solution</li>
                                <li className="pb-2"><a href="">FAQs</a></li>
                                <li className="pb-2"><a href="">Privacy Policy</a></li>
                                <li className="pb-2"><a href="">Terms and Condition</a></li>
                                <li><a href="">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        
                        <ul>
                            <li className="font-extrabold pb-2">Contact</li>
                            <li className="flex items-center pb-2">
                                <div className="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 7.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075ZM12 10.2Z"/></svg> 
                                </div>{/*<!--Location-->*/}
                                <p>First Trust, Buea Cameroon</p>
                            </li>

                            <li className="flex items-center pb-2">
                                <div className="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M16.996 7.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847h5.072Z"/></svg> 
                                </div>{/*<!--Telephone-->*/}
                                <p>+237 670 000 000</p>    
                            </li>

                            <li className="flex items-center">
                                <div className="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/></svg> {/*<!--Email-->*/}
                                </div>
                                <p>office@babershop.com</p>
                            </li>
                            
                        </ul>
                </div>

                </div>

            


            </div>

            <p className="text-[12px] text-center text-slate-400">&copy; 2023 BARBER SHOP All Rights Reserved</p>


    </footer>

    )
}