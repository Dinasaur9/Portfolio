import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="text-align: center; margin-top: 50px;">
    <img src="/Picture.jpeg" alt="Your Picture" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin-bottom: 20px;" />
    <h1 style="font-family: Arial, sans-serif;">Dina Seoudi</h1>
    <div style="margin-top: 20px;">
      <a href="https://www.linkedin.com/in/dina-seoudi" target="_blank" style="text-decoration: none; color: white; background-color: #0073e6; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">LinkedIn</a>
      <a href="https://github.com/Dinasaur9" target="_blank" style="text-decoration: none; color: white; background-color: #333; padding: 10px 20px; border-radius: 5px; margin-right: 10px;">GitHub</a>
      <a href="https://ucmerced.joinhandshake.com/profiles/50638026" target="_blank" style="text-decoration: none; color: white; background-color: #f39c12; padding: 10px 20px; border-radius: 5px;">Handshake</a>
    </div>
  </div>
`;
