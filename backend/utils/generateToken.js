import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  //this will take the payload, use userID to verify the token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
  //response
  //15 days 24 hours 60 minutes 60 seconds * 1000 milliseconds
  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent xss attacks meaning cross site scripting attacks
    sameSite: 'strict', // CSRF attacks cross site request forgery attacks
    secure: process.env.NODE_ENV !== 'development',
  });
};
export default generateTokenAndSetCookie;
