import rateLimit from 'express-rate-limit'

const Limiter=rateLimit({
windowMs: 15*60*1000,//15 mins
max:5,//number of reqs
message:"Please try again later.",
standardHeaders:false,
legacyHeaders:false,
});

export default Limiter