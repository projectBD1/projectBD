import rateLimit from 'express-rate-limit'

const Limiter=rateLimit({
windowMs: 15*60*1000,//15 mins
max:5,//number of reqs
message:"Please try again later.",
standardHeaders:false,//sending number of rate limits remaining in header, set to false so we don't send
legacyHeaders:false,//legacyHeaders set to false, older version of standardHeaders
});

export default Limiter