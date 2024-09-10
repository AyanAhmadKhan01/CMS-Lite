import Tooltip from './Tootip';

function Contact() {
    return (
        <>
        <div className="contact-page">
            <div className="contact-section">
      <h1>Contact Me</h1>
      <form id="contact-page-form"> 
        <input type="text" className="name-put" placeholder="Enter your name" /> <br />
        <input type="email" className="email-put" placeholder="Enter your email" /> <br />
        <textarea class="message-put" placeholder="Enter your message"></textarea>  <br />
        <input type="submit" className="btn-sumbit" />
        <div className="tooltip-info-icon">
        <Tooltip tooltipText='The contact form will not function as it lacks a backend service.'>
        <i class="fas fa-info" id='info-icon'></i>
        </Tooltip>
        </div>
      </form>
      <div className="tooltip-section">
      <Tooltip tooltipText="DevLegend">
        <a href="https://discord.com/invite/z7agFHxwJT" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-discord" id='contact-discord'></i> 
        </a>
      </Tooltip>
      <Tooltip tooltipText='ayanahmadkhan042@gmail.com'>
      <a href="mailto:ayanahmadkhan042@gmail.com" target="_blank" rel="noopener noreferrer">
       <i class="fa-regular fa-envelope" id='conatact-email'></i>
       </a>
      </Tooltip>
      </div>
      </div>
      </div>
        </>
    )
}

export default Contact;