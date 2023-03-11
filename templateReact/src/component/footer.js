import { Component } from "react"
import img from "../Images/logo2.webp"

export default class Footer extends Component {
    constructor() {
        super();
    }
    render() {
        return <>
            <div className="container-fluid my-5">
                {/* <!-- Footer --> */}
                {/* <!--.footer_wrap --> */}
			<footer className="footer_wrap widget_area scheme_original">
               {/* <!--.footer_wrap_inner --> */}
                <div className="footer_wrap_inner widget_area_inner">
                   {/* <!--.content_wrap --> */}
                    <div className="content_wrap">
                        <aside id="lovestory_widget_socials-2" className="widget_number_1 widget widget_socials">
                            <div className="widget_inner">
                                <div className="logo">
                                    <a href="index.html"><img src={img} style={{}} className="logo_main" alt=""/></a>
                                </div>
                                <div className="sc_socials sc_socials_type_icons sc_socials_shape_round sc_socials_size_tiny">
                                    <div className="sc_socials_item"><a href="#" className="social_icons social_facebook"><span className="icon-facebook"></span></a></div><div className="sc_socials_item"><a href="#" className="social_icons social_twitter"><span className="icon-twitter"></span></a></div><div className="sc_socials_item"><a href="#" className="social_icons social_instagramm"><span className="icon-instagramm"></span></a></div><div className="sc_socials_item"><a href="#" className="social_icons social_gplus"><span className="icon-gplus"></span></a></div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    {/* <!-- end .content_wrap --> */}
                </div>
                {/* <!-- end .footer_wrap_inner --> */}
            </footer>
            {/* <!-- end .footer_wrap --> */}
				 
			<div className="copyright_wrap copyright_style_text  scheme_original">
                <div className="copyright_wrap_inner">
                    <div className="content_wrap">
                        <div className="copyright_text">
                            <p>ThemeREX &copy; 2017 All Rights Reserved <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
            </div>
		
		{/* <!-- end .page_wrap --> */}

            
            </div>
           
        </>

    }
}
