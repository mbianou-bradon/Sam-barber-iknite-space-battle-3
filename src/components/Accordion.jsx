import {
  FaCaretDown,
  FaCaretUp,
} from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

export default function Accordion(){

    return (
    <div className="">

        <div className="[&>*]:mb-5">
            <div className="m-[0.8rem] overflow-hidden border-b border-primary shadow-lg">
                <input type="checkbox" name="faq_1" id="faq_1" className="sr-only peer" />
                <label for="faq_1" className="peer-checked:[&>section]:text-white peer-checked:[&>section]:bg-primary peer-checked:[&>section>div>h4]:hidden peer-checked:[&>section>div>h3]:block peer-checked:[&>div]:max-h-screen peer-checked:[&>div]:p-[1rem]">
                    <section className="p-[1em] cursor-pointer font-bold flex justify-between text-slate-500">
                        <div class="w-[80%] flex items-center">
                            <AiOutlineHeart
                                size={20}
                                className="text-gray-400 mx-3"
                            />
                            <h2>Make saving into a hobby</h2>
                        </div>
        
                        <div className="text-xl flex items-center justify-center">
                            <h4 className="block">
                                <FaCaretDown size={20} className="" />
                            </h4>
                            <h3 className="hidden">
                                <FaCaretUp size={20} className="" />
                            </h3>
                        </div>
                    </section>

                    <div className="max-h-0 p-[0.001rem] bg-white transition-all duration-[1s] text-[0.8rem]">
                        <p>
                            Achieve the financial goal you desire by saving regularly
                            and habitually turning a mundane habit into a life changing
                            routine.
                        </p>
                    </div>
                </label>
            </div>

            <div className="m-[0.8rem] overflow-hidden border-b border-primary  shadow-lg">
                <input type="checkbox" name="faq_2" id="faq_2" className="sr-only peer"/>
                <label for="faq_2" className="peer-checked:[&>section]:text-white peer-checked:[&>section]:bg-primary peer-checked:[&>section>div>h4]:hidden  peer-checked:[&>section>div>h3]:block peer-checked:[&>div]:max-h-screen peer-checked:[&>div]:p-[1rem]">
                    <section className="p-[1em] cursor-pointer font-bold flex justify-between text-slate-500">
                        <div class="w-[80%] flex items-center">
                        <AiOutlineHeart
                            size={20}
                            className="text-gray-400 mx-3"
                        />
                        <h2>Monitor finances more easily</h2>
                        </div>

                        <div className="text-xl flex items-center justify-center">
                            <h4 className="block">
                                <FaCaretDown size={20} className="" />
                            </h4>
                            <h3 className="hidden">
                                <FaCaretUp size={20} className="" />
                            </h3>
                        </div>
                    </section>
                        
                        

                    <div className="max-h-0 p-[0.001rem] bg-white transition-all duration-[1s] text-[0.8rem]">
                        <p>
                            Reach your goals with personalized insights, custom budgets, spend tracking, and subscription monitoring. 
                        </p>
                    </div>
                </label>
            </div>

            <div class="m-[0.8rem] overflow-hidden border-b border-primary  shadow-lg">
                <input type="checkbox" name="faq_3" id="faq_3" class="sr-only peer"/>
                <label for="faq_3" class="peer-checked:[&>section]:text-white peer-checked:[&>section]:bg-primary peer-checked:[&>section>div>h4]:hidden  peer-checked:[&>section>div>h3]:block peer-checked:[&>div]:max-h-screen peer-checked:[&>div]:p-[1rem]">
                    <section class="p-[1em] cursor-pointer font-bold flex justify-between text-slate-500">
                        <div class="w-[80%] flex items-center">
                        <AiOutlineHeart
                            size={20}
                            className="text-gray-400 mx-3"
                        />
                        <h2>Achieve your financial goals</h2>
                        </div>
                        <div className="text-xl flex items-center justify-center">
                            <h4 className="block">
                                <FaCaretDown size={20} className="" />
                            </h4>
                            <h3 className="hidden">
                                <FaCaretUp size={20} className="" />
                            </h3>
                        </div>
                    </section>


                    <div class="max-h-0 p-[0.001rem] bg-white transition-all duration-[1s] text-[0.8rem]">
                        <p>
                            Achieve the financial goal you desire by saving regularly
                            and habitually turning a mundane habit into a life changing
                            routine.
                        </p>
                    </div>
                </label>
            </div>
        </div>
    </div>
    )
}