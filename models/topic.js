    import mongoose, { Schema} from "mongoose";

    const topicScehma = new Schema(
    {
        title:String,
        description:String,
    },
    {
        timestamps:true,
    }

    );

    const Topic = mongoose.models.Topic  || mongoose.model("Topic", topicScehma);
    export default Topic;