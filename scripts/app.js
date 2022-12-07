const obfuscateEmailAddress = (elementId) => {
  let user = '&#100;&#101;&#098;&#098;&#105;&#101;&#114;&#106;&#111;&#104;&#110;&#115;&#111;&#110;&#046;&#108;&#112;&#099;';
  let domain = 'gmail.com';
  let emailElement = document.getElementById(elementId);
  let emailAddress = user + '@' + domain;
  
  // Set the Human-Readable email address to the encoded version, as it will be translated by the browser.
  emailElement.innerHTML = emailAddress;
  
  // Reserve the plain-text version for clicks only.
  emailElement.addEventListener('click', () => {
    emailElement.setAttribute('href', 'mailto:' + emailElement.innerHTML);
  });
}
obfuscateEmailAddress('email');

const phone = '&#055;&#048;&#054;&#045;&#051;&#056;&#051;&#045;&#055;&#048;&#054;&#053;';

const getPhoneNumber = () => {
  return phone;
}

const obfuscatePhoneNumber = (elementId) => {
  let phoneElement = document.querySelector(elementId);
  phoneElement.innerHTML = phone;

  phoneElement.addEventListener('click', () => {
    phoneElement.setAttribute('href', 'tel:' + phoneElement.innerHTML);
  });
}

setTimeout(() => {
  obfuscatePhoneNumber('#phone');
  obfuscatePhoneNumber('#header-phone');
}, 500);

