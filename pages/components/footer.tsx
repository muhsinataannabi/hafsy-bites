import { Facebook,Instagram,Twitter,Linkedin } from "lucide-react";
export default function Footer(){
  return(
    <footer className=" bg-orange-100">
      <div className="flex gap-5 justify-center w-full  py-3 px-5 sticky
     bottom-0 h-15">
        <img
      src="logo.png"
      alt="logo"
      width={60}
      className="mr-20"
      />
      <Facebook
      width={18}
      />
      <Instagram
      width={18}
      />
      <Twitter
     width={18} 
      />
      <Linkedin
      width={18}
      />
      </div>
    </footer>
    );
}