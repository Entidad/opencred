import { decodeJwt } from 'jose';

const vpToken = 'eyJhbGciOiJFUzI1NiIsImtpZCI6ImRpZDp3ZWI6NzI0Zi00Ny0xNDQtMy05Mi5uZ3Jvay1mcmVlLmFwcCM4YTVkZGQwODU1YThlYzZiYjU5ZGNjMDIxZDc0NDM0NDA3MDljMjYyNjMxZDcyN2UxNDMwY2MxYWFhNTM5YzkxIiwidHlwIjoiSldUIn0';

const main = () => {
  const vpTokenPayload = decodeJwt(vpToken);
  console.log(vpTokenPayload);
  //const vpJwt = vpTokenPayload.vp;
  //const vcToken = vpJwt.verifiableCredential[0];
  // const vcTokenPayload = decodeJwt(vcToken);
  // const vcJwt = vcTokenPayload.vc;
  //console.log(vcJwt);
};

main();
