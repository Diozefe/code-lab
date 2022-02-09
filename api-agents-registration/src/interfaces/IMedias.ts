export interface IVoice{
   min: Number,
   max: Number,
   selected: Number,
   handleMode: String,
   device: String,
   devicePassword: String,
}

export interface IEmail{
    min: Number,
    max: Number,
    selected: Number
 }

export interface IChat{
    min: Number,
    max: Number,
    selected: Number,
    handleMode: String
}

export interface IMedias{
    voice: IVoice,
    email: IEmail,
    chat: IChat,
}