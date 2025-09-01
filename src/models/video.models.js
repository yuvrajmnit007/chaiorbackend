import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema (
{
    videoFile:{
        type:String,//clouinary url
        required :true,
    },
    thumbnail:{
        type:String,//clouinary url
        required :true,
    },
    title:{
        type:String,
        required :true,
    },
    discription:{
        type:String,
        required :true,
    },
    duration:{//yha per user nhi dalega time to cloudinary url hi apne ko duration btayega 
        type:Number,
        required :true,
    },
    views:{
        type:true,
        default:0
    },
    ispublished:{
        type:boolean,
        default:true,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
},{
    timestamps:true
}
)
 
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("video" ,videoSchema)