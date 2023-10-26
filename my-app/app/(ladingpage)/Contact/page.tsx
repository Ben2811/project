const Contact = () => (
  <div className="contact-page">
      <h1 className="m-4 text-5xl flex justify-center">Contact Page</h1>
      <div className="contact-options">
        <div className="contact-option left">
          <p className="text-2xl">You can contact us via our social media handles:</p>
          <ul>
            <li className="text-xl">
              <a href="https://www.hutech.edu.vn/">Original Page</a>
            </li>
            <li className="text-xl">
              <a href="https://www.facebook.com/hutechuniversity">Facebook</a>
            </li>
          </ul>
        </div>
        <div className="contact-option right">
           <p className="text-2xl flex">Contact direct with us</p>
        </div> 
      </div>
  </div>
  );
  
  export default Contact;